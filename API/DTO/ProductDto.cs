namespace API.DTO
{
    public class ProductDto
    {
        
        public int Id { get; set; }

        
        public string Brand { get; set; }

        
        public string Category { get; set; } 
        
        public int IsFollowInStock { get; set; }

        
        public string Name { get; set; } 

        
        public string NameSup_ae { get; set; } 

        
        public double Price { get; set; }

        public string RefNr { get; set; } 

        public int Quantity { get; set; }

       
        public string UrlPicture1 { get; set; }


        public string UrlPicture2 { get; set; }

        public string UrlPicture3 { get; set; }

        public string UrlPicture4 { get; set; }

        public string UrlPicture5 { get; set; }
        public int IsWeb {get; set; }
    }
}