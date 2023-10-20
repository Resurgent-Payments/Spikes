using MiCamp.TestHost;
using System.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


builder.Services.AddSingleton(new MiCampAuthenticationDelegatingHandlerOptions
{
    Host = new Uri("https://gateway.mipaymentchoice.com"),
    Credential = new MiCampCredential("mcnorthapi1", "MCGws6sP2")
});
builder.Services.AddTransient<MiCampAuthenticationDelegatingHandler>();
builder.Services.AddHttpClient("MiCamp", (services, client) =>
{
    var options = services.GetRequiredService<MiCampAuthenticationDelegatingHandlerOptions>();
    client.BaseAddress = options.Host;
    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
})
    .AddHttpMessageHandler<MiCampAuthenticationDelegatingHandler>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

public partial class Program { }