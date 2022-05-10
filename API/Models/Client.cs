using System.Runtime.Serialization;

namespace API.Models
{
     [DataContract(Name = "CLI_api")]
    public class Client
    {
        
        [DataMember(Name = "_id")]
        public int Id { get; set; }

        [DataMember(Name = "_id_record")]
        public int Id_Record { get; set; }

        [DataMember(Name = "accountName")]
        public string AccountName { get; set; }

        [DataMember(Name ="email_ae")]
        public string Email { get; set; }

        [DataMember(Name = "password")]
        public string Password { get; set; }

        [DataMember(Name = "firstName")]
        public string FirstName{ get; set; }

        [DataMember(Name = "lastName")]
        public string LastName{ get; set; }
    }
}