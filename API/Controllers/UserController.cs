using API.Data.IRepository;
using API.DTO;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly TokenService _tokenService;
        public UserController(IUnitOfWork unitOfWork, IMapper mapper, TokenService tokenService) : base(unitOfWork, mapper)
        {
            _tokenService = tokenService;
        }



        [HttpPost("login")]
        public async Task<ActionResult<LoginDto>> Login(LoginDto loginDTO)
        {
            var user = await _unitOfWork.User.GetByUsername(loginDTO.Username);
            if (user == null || _unitOfWork.User.Checkpassword(loginDTO.Password, user.Password))
                return Unauthorized();

            return new LoginDto
            {
                Username = user.Username,
                Token = await _tokenService.GenerateToken(loginDTO)
            };
        }

        [HttpPost("register")]

        public async Task<ActionResult> Register(RegisterDto registerDto){

            var registerUser = await _unitOfWork.User.Register(registerDto);

            if(registerDto == null) return ValidationProblem();

            return StatusCode(201);
        }



    }
}