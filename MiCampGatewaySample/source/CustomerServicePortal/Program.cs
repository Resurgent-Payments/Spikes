using DataServer.Persistence;
using HSP;
using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging.Bus;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<HostedServiceRm>();

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddHttpClient();


// reactive domain setup.

builder.Services.AddSingleton<IConfiguredConnection>(services =>
{
    var dataServer = new DataStore("ds");
    dataServer.Connect();

    var configured = new ConfiguredConnection(dataServer, new PrefixedCamelCaseStreamNameBuilder(), new JsonMessageSerializer());
    return configured;
});
builder.Services.AddSingleton<IDispatcher>(services =>
{
    var dispatcher = new Dispatcher("Customer Service Portal - Dispatcher");

    _ = new HostedServiceTransientSubscriptions(services.GetRequiredService<IConfiguredConnection>().GetCorrelatedRepository(), dispatcher);

    return dispatcher;
});
builder.Services.AddSingleton<ICommandPublisher>(services => services.GetRequiredService<IDispatcher>());
builder.Services.AddSingleton<HostedServiceRm>();
builder.Services.AddSingleton<SubscriberRm>();


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
