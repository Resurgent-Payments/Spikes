using Microsoft.AspNetCore.Components;
using PowerModels.Persistence;
using ReactiveDomain;
using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging.Bus;
using Residuals;

using Dispatcher = ReactiveDomain.Messaging.Bus.Dispatcher;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddBlazorBootstrap();

builder.Services.AddSingleton<IStreamStoreConnection>(_ => {
    var path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Resurgent Residuals");
    if (!Directory.Exists(path)) { Directory.CreateDirectory(path); }
    var connection = new DataStore("Resurgent Residuals", Path.Combine(path, "Residuals.db"));
    connection.Connect();
    return connection;
});
builder.Services.AddSingleton<IConfiguredConnection>(sp
    => new ConfiguredConnection(
        sp.GetRequiredService<IStreamStoreConnection>(),
        new PrefixedCamelCaseStreamNameBuilder(),
        new JsonMessageSerializer()));
builder.Services.AddSingleton<IDispatcher>(_ => new Dispatcher("Resurgent Residuals - Main Dispatcher"));
builder.Services.AddSingleton<ICommandPublisher>(sp => sp.GetRequiredService<IDispatcher>());


builder.Services.AddSingleton<Merchants>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
