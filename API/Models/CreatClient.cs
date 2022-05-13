using System.Runtime.Serialization;
namespace API.Models
{
    public class CreatClient
    {

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