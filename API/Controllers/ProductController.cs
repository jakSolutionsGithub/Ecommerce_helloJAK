using API.Data.IRepository;
using API.DTO;
using API.Extensions;
using API.Models;
using API.RequestHelpers;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductController : BaseApiController
    {
        public ProductController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductDto>>> GetProducts([FromQuery] ProductParams productparams)
        {
            var products = await _unitOfWork.Product.GetAllProduct(productparams);
          
            if (products is null) return NotFound();

            List<ProductDto> listProductDto = _mapper.Map<List<Product>, List<ProductDto>>(products);

            // Response.AddPaginationHeader(listProductDto.MetaData);

            return listProductDto;

        }

        [HttpGet("{id}", Name ="GetProductById")]
        public async Task<ActionResult<ProductDto>> GetProductById(int id){

            var product = await _unitOfWork.Product.GetProductById(id);

            if(product is null) return NotFound();

            return  Ok(product);
        }
    }
}