using API.Data.IRepository;
using API.DTO;
using API.Models;
using FMData;

namespace API.Data.Repository
{
    public class UserRepository : IUserRepository<User>
    {
           private IFileMakerApiClient _client;
        public UserRepository(IFileMakerApiClient client)
        {
            _client = client;
        }
         public async Task<User> GetByUsername(string username)
        {
            var toFind = new User { Username = "==" + username };

            var result = await _client.FindAsync(toFind);
            return result.FirstOrDefault();
        }
         public bool Checkpassword(string passwordToEncrypt, string passwordEncrypted)
        {
            if (passwordToEncrypt == passwordEncrypted)
                return false;
            return true;
        }

         public async Task<IEnumerable<User>> GetAll()
        {
            var toFind = new User { Username = "*" };

            var result = await _client.FindAsync(toFind);
            return result;
        }

        
        public async Task<User> GetById(int id)
        {
            var toFind = new User { Id = id };

            var result = await _client.FindAsync(toFind);
            return result.FirstOrDefault();
        }
        public async Task<UserDto> Register (RegisterDto registerDto){

            if(registerDto != null){
                var user = new User { Username = registerDto.Username, Email = registerDto.Email, Password = registerDto.Password};
                var result = await _client.CreateAsync(user);

                if(result.Messages.First().Code == "0"){

                    var toFindUser = new User {Id_Record = result.Response.RecordId};
                    var resultUser = await _client.FindAsync(toFindUser);

                    if(!resultUser.Any()) return null;

                    var userCreated = new UserDto{
                        Username = registerDto.Username,
                        Id = resultUser.FirstOrDefault().Id,
                        Email = resultUser.FirstOrDefault().Email,
                    };
                    return userCreated;
                }
            }
            return null;
            
            


        }

    }
}