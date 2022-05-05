using API.Data.IRepository;
using API.Models;
using AutoMapper;
using FMData;

namespace API.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IFileMakerApiClient _client;
        
        public UnitOfWork(IFileMakerApiClient client, IMapper mapper)
        {
            
            _client = client;
            Product = new ProductRepository(_client);
            User = new UserRepository(_client);

        }
        public IProductRepository<Product> Product { get; private set; }
        public IUserRepository<User> User { get; private set; }
    }
}