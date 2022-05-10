using API.Data.IRepository;
using API.DTO;
using API.Models;
using AutoMapper;
using FMData;
using Microsoft.AspNetCore.Server.IIS.Core;

namespace API.Data.Repository
{
    public class ClientRepository : IClientRepository<Client>
    {
        private IFileMakerApiClient _client;
       
        public ClientRepository(IFileMakerApiClient client)
        {
            
            _client = client;
        }
        public async Task<Client> GetByClientName(string accountName)
        {
            var toFind = new Client { AccountName = "==" + accountName };

            var result = await _client.FindAsync(toFind);
            return result.FirstOrDefault();
        }
        public bool Checkpassword(string passwordToEncrypt, string passwordEncrypted)
        {
            if (passwordToEncrypt == passwordEncrypted)
                return false;
            return true;
        }

        public async Task<IEnumerable<Client>> GetAll()
        {
            var toFind = new Client { AccountName = "*", FirstName="*" };

            var request = _client.GenerateFindRequest<Client>().UseLayout(new Client());

            request.AddQuery(query: toFind);
            try
            {
                var result = await _client.SendAsync(request);

                return result;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }

        }


        public async Task<Client> GetById(int id)
        {
            var toFind = new Client { Id = id };

            var result = await _client.FindAsync(toFind);
            return result.FirstOrDefault();
        }
        public async Task<ClientDto> Register(RegisterDto registerDto)
        {

            if (registerDto != null)
            {
                var client = new Client { AccountName = registerDto.AccountName, Email = registerDto.Email, Password = registerDto.Password, FirstName = registerDto.FirstName, LastName = registerDto.LastName, };
                var result = await _client.CreateAsync(client);

                if (result.Messages.First().Code != "0")
                {
                    var toFindClient = new Client{Id_Record = result.Response.RecordId};
                    var res = await _client.FindAsync(toFindClient);

                    ClientDto newClient= new ClientDto{ AccountName= registerDto.AccountName, Id= res.FirstOrDefault().Id, Email = registerDto.Email};
                    return newClient;
                }

            }
            return null;

        }
    }
}