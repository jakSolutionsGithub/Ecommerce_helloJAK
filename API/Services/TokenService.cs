using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.DTO;
using FMData;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class TokenService
    {
        private IFileMakerApiClient _client;
        private readonly IConfiguration _config;


        public TokenService(IFileMakerApiClient client, IConfiguration config)
        {
            _config = config;
            _client = client;

        }

        public async Task<string> GenerateToken(LoginDto loginDto){
            
            var claims = new List<Claim>{
                new Claim(ClaimTypes.Name, loginDto.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWTSettings:TokenKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

            var tokenOptions = new JwtSecurityToken(
                issuer: null,
                audience: null,
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }
    }
}