using API.Models;

namespace API.Data.IRepository
{
    public interface IUnitOfWork
    {
         IProductRepository<Product> Product {get; }
         IUserRepository<User> User {get; }
    }
}