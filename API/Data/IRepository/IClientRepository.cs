using API.DTO;

namespace API.Data.IRepository
{
    public interface IClientRepository<T>
    {
         Task<T> GetByClientName(string username);
         bool Checkpassword(string passwordToEncrypt, string passwordEncrypted);

         Task<IEnumerable<T>> GetAll();
         Task<T> GetById(int id);
         Task<ClientDto> Register(RegisterDto registerDto);
    }
}