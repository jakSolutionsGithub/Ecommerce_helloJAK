using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.Features;

namespace API.RequestHelpers
{
    public class PagedList<T> : List<T>
    {
        public PagedList(List<T> items, int count, int pageNumber, int pageSize)
        {
            MetaData = new MetaData{

                TotalCount = count,
                PageSize = pageSize,
                CurrentPage = pageNumber,
                TotalPages = (int)Math.Ceiling(count/(double)pageSize)

            };
        }
        public MetaData MetaData {get; set;}

        public static async Task<PagedList<T>> ToPagedList(IEnumerable<T> result, int pageNumber, int pageSize){
            
            var count = result.Count();
            var items = result.Skip((pageNumber-1)*pageSize).Take(pageSize).ToList();

            return  new PagedList<T>(items, count, pageNumber,pageSize);
        }

       
    }

    
}