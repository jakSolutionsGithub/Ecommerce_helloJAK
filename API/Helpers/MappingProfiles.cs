using API.DTO;
using API.Models;
using API.RequestHelpers;
using AutoMapper;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
            CreateMap<Client, ClientDto>().ReverseMap();
            
            
        }
    }
}