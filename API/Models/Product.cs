using System.Runtime.Serialization;

namespace API.Models
{
    [DataContract(Name = "PRO_api")]
    public class Product
    {
        [DataMember(Name = "_id")]

        public int Id { get; set; }


        [DataMember(Name = "brand")]

        public string Brand { get; set; }


        [DataMember(Name = "category")]

        public string Category { get; set; } 


        [DataMember(Name = "isFollowInStock")]

        public int IsFollowInStock { get; set; }


        [DataMember(Name = "name")]

        public string Name { get; set; } 


        [DataMember(Name = "nameSUP_ae")]

        public string NameSup_ae { get; set; } 


        [DataMember(Name = "price")]

        public double Price { get; set; }


        [DataMember(Name = "refNr")]

        public string RefNr { get; set; } 


        [DataMember(Name = "qtyStockReal")]

        public int Quantity { get; set; }


        [DataMember(Name = "url_pictureWeb1")]

        public string UrlPicture1 { get; set; }


        [DataMember(Name = "url_pictureWeb2")]

        public string UrlPicture2 { get; set; }


        [DataMember(Name = "url_pictureWeb3")]

        public string UrlPicture3 { get; set; }


        [DataMember(Name = "url_pictureWeb4")]

        public string UrlPicture4 { get; set; }


        [DataMember(Name = "url_pictureWeb5")]

        public string UrlPicture5 { get; set; }


        [DataMember(Name="isWeb_b")]
        
        public int IsWeb {get; set; }


    }
}
