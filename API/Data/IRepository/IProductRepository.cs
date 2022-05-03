using API.RequestHelpers;

namespace API.Data.IRepository
{
    public interface IProductRepository<T>
    {
         Task<T> GetProductById(int id);
         Task<List<T>> GetAllProduct(ProductParams productParams); 
    }
}