using API.Data.IRepository;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        protected readonly IUnitOfWork _unitOfWork;
        protected readonly IMapper _mapper;
        public BaseApiController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;

        }
    }
}