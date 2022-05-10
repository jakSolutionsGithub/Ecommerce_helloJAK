namespace API.DTO
{
    public class RegisterDto : LoginDto
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}