using API.Data.IRepository;
using API.DTO;
using API.Models;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ClientController : BaseApiController
    {
        private readonly TokenService _tokenService;
        public ClientController(IUnitOfWork unitOfWork, IMapper mapper, TokenService tokenService) : base(unitOfWork, mapper)
        {
            _tokenService = tokenService;
        }



        [HttpPost("login")]
        public async Task<ActionResult<LoginDto>> Login(BeforLoginDto BeforLoginDTO)
        {
            var client = await _unitOfWork.Client.GetByClientName(BeforLoginDTO.AccountName);
            if (client == null || _unitOfWork.Client.Checkpassword(BeforLoginDTO.Password, client.Password))
                return Unauthorized();

            return new LoginDto
            {
                AccountName = client.AccountName,
                Token = await _tokenService.GenerateToken(BeforLoginDTO)
            };
        }

        [HttpPost("register")]

        public async Task<ActionResult> Register(RegisterDto registerDto){

            var registerUser = await _unitOfWork.Client.Register(registerDto);

            if(registerUser == null){
                
                 return ValidationProblem();

            }

            return Ok(registerUser);
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<IEnumerable<ClientDto>>> GetAll(){

            var clients = await _unitOfWork.Client.GetAll();

            if(clients != null) return Ok(clients);

            return NotFound();

        }

        [HttpGet("currentClient")]
        public async Task<ActionResult<LoginDto>> GetCurrentClient(){

            var client = await _unitOfWork.Client.GetByClientName(User.Identity.Name);


            return new LoginDto{
                AccountName = client.AccountName,
                Token = await _tokenService.GenerateToken(new BeforLoginDto{AccountName = client.AccountName})
            };
        }


    }
}