using System.Text;
using API.Data.IRepository;
using API.Data.Repository;
using API.Helpers;
using API.Middleware;
using FMData;
using FMData.Rest;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpClient();

builder.Services.AddSingleton<FMData.ConnectionInfo>(ci => new FMData.ConnectionInfo
{
    FmsUri = "https://fms192.hostmy.solutions",
    Username = "eCommerceAPI",
    Password = "#o-sLY*GMZ,9&]Er_VLHW=Vzm",
    Database = "helloJAK"
});

// Keep the FileMaker client as a singleton for speed
builder.Services.AddSingleton<IFileMakerApiClient, FileMakerRestClient>(s =>
{
    var hcf = s.GetRequiredService<IHttpClientFactory>();
    var ci = s.GetRequiredService<FMData.ConnectionInfo>();
    return new FileMakerRestClient(hcf.CreateClient(), ci);
});

builder.Services.AddControllers();
builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = " API Ecommerce_helloJak", Version = "v1" });
        c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            Description = "Jwt auth header",
            Name = "Authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.ApiKey,
            Scheme = "Bearer"
        });
        c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                },
                Scheme = "oauth2",
                Name = "Bearer",
                In = ParameterLocation.Header
            },
            new List<string>()
        }
    });
    }
);

builder.Services.AddCors();

// Adding Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt =>
    {
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWTSettings:TokenKey"]))
        };
    });

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API Ecommerce_helloJak v1"));
}

// app.UseHttpsRedirection();
app.UseCors(opt =>{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000", "http://localhost:3001").AllowCredentials();
} 
        
);
app.UseAuthorization();

app.MapControllers();

app.Run();
