using API.Models;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string orderBy){
            
            if(string.IsNullOrEmpty(orderBy)) return query.OrderBy(p => p.Name);

            query = orderBy switch{

                "price" => query.OrderBy(p => p.Price),
                "priceDesc" => query.OrderByDescending(p => p.Price),
                _ => query.OrderBy(p => p.Name)
            };

            return query;
        }

        public static IQueryable<Product> Search ( this IQueryable<Product> query , string searchTerm){

            if(string.IsNullOrEmpty(searchTerm)) return query;

            searchTerm = searchTerm.Trim().ToLower();

            return query.Where(p => p.Name.ToLower().Contains(searchTerm));
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string brands, string categorys){

            var brandList = new List<string>();
            var categoryList = new List<string>();

            if(!string.IsNullOrEmpty(brands))
                brandList.AddRange(brands.ToLower().Split(",").ToList());
            
            if(!string.IsNullOrEmpty(categorys))
                categoryList.AddRange(categorys.ToLower().Split(",").ToList());

            query = query.Where(p => brandList.Count == 0 || brandList.Contains(p.Brand.ToLower()));
            query = query.Where(p =>categoryList.Count == 0 || categoryList.Contains(p.Category.ToLower()));

            return query;


        }
    }
}