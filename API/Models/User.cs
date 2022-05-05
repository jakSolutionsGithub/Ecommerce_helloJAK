using System.Runtime.Serialization;

namespace API.Models
{
     [DataContract(Name = "API_usr")]
    public class User
    {
        
        [DataMember(Name = "_id")]
        public int Id { get; set; }

        [DataMember(Name = "_id_record")]
        public int? Id_Record { get; set; }

        [DataMember(Name = "username")]
        public string Username { get; set; }

        [DataMember(Name ="email")]
        public string Email { get; set; }

        [DataMember(Name = "password_encrypted")]
        public string Password { get; set; }

        [DataMember(Name = "typeOf")]
        public string Type { get; set; }
    }
}