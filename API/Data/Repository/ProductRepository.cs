using System.ComponentModel;
using API.Data.IRepository;
using API.Models;
using API.RequestHelpers;
using AutoMapper;
using FMData;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Data.Repository
{
    public class ProductRepository : IProductRepository<Product>
    {
        private readonly IFileMakerApiClient _client;

        public ProductRepository(IFileMakerApiClient client)
        {

            _client = client;

        }
        public async Task<List<Product>> GetAllProduct(ProductParams productParams)
        {
            var toFind = new Product { IsWeb = 1 };
            List<string> brandList = new();
            List<string> categoryList = new();
            List<Product> toFindProduct = new List<Product>();

            var request = _client.GenerateFindRequest<Product>().UseLayout(new Product());

            if (productParams.SearchTerm == null)
            {
                if (productParams.Brand != null || productParams.Category != null)
                {
                    if (productParams.Brand != null)
                    {
                        var queryBrand = new Product { Brand = productParams.Brand };
                        request.AddQuery(query: queryBrand);

                        request.Sort = new[]{
                        new FMData.Rest.Requests.Sort(){
                        FieldName = "Brand",
                        SortOrder= "ascend"
                        }

                    };


                    }
                    if (productParams.Category != null)
                    {
                        var queryCategory = new Product { Category = productParams.Category };
                        request.AddQuery(query: queryCategory);

                        request.Sort = new[]{
                        new FMData.Rest.Requests.Sort(){
                        FieldName = "Category",
                        SortOrder= "ascend"
                        }

                    };


                    }

                }
                else
                {
                    request.AddQuery(query: toFind);

                    request.Sort = new[]{
                        new FMData.Rest.Requests.Sort(){
                        FieldName = "Name",
                        SortOrder= "ascend"
                        }

                    };


                }

                try
                {

                    var result = await _client.SendAsync(request);
                    return result.ToList();

                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    return null;
                }
            }
            else
            {


                var searchTerm = productParams.SearchTerm.Trim().ToLower();
                if (!string.IsNullOrEmpty(productParams.Brand))
                    brandList.AddRange(productParams.Brand.ToLower().Split(",").ToList());

                if (!string.IsNullOrEmpty(productParams.Category))
                    categoryList.AddRange(productParams.Category.ToLower().Split(",").ToList());

                foreach (var brand in brandList)
                {
                    var search = "*";
                    toFindProduct.Add(new Product { IsWeb = 1, Brand = brand, Name = search });

                }
                foreach (var category in categoryList)
                {
                    toFindProduct.Add(new Product { IsWeb = 1, Category = category, Name = "*" });

                }
                foreach (var toFindQ in toFindProduct)
                {
                    request.AddQuery(query: toFindQ);
                }

                toFind.Name = productParams.SearchTerm;

                request.AddQuery(query: toFind);


                if (!string.IsNullOrEmpty(productParams.OrderBy))
                {
                    if (productParams.OrderBy == "price")
                    {

                        request.Sort = new[]{
                        new FMData.Rest.Requests.Sort(){
                            FieldName = "Price",
                            SortOrder = "ascend"
                        }
                    };
                    }
                    else
                    {
                        request.Sort = new[]{
                        new FMData.Rest.Requests.Sort(){
                        FieldName = "Name",
                        SortOrder= "ascend"
                        }

                    };
                    }
                }
                try
                {

                    var result = await _client.SendAsync(request);
                    return result.ToList();

                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    return null;
                }
            }

        }


        public async Task<Product> GetProductById(int id)
        {
            var toFind = new Product { Id = id };

            try
            {

                var result = await _client.FindAsync(toFind);

                return result.FirstOrDefault();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }
    }
}