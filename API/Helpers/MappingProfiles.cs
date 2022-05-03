using API.DTO;
using API.Models;
using AutoMapper;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
            
        }
    }
}