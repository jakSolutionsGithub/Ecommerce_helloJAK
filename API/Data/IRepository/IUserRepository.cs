using API.DTO;

namespace API.Data.IRepository
{
    public interface IUserRepository<T>
    {
         Task<T> GetByUsername(string username);
         bool Checkpassword(string passwordToEncrypt, string passwordEncrypted);

         Task<IEnumerable<T>> GetAll();
         Task<T> GetById(int id);
         Task<UserDto> Register(RegisterDto registerDto);
    }
}