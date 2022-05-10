using API.Models;

namespace API.Data.IRepository
{
    public interface IUnitOfWork
    {
         IProductRepository<Product> Product {get; }
         IClientRepository<Client> Client {get; }
    }
}