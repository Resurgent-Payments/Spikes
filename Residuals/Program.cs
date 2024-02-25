using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging.Bus;
using ReactiveDomain;
using Residuals;
using System.CommandLine;
using System.CommandLine.Builder;
using System.CommandLine.Hosting;
using System.CommandLine.Parsing;
using PowerModels.Persistence;

var rootCommand = new RootCommand("Middleware example")
{
    new Residuals.ImportsCommand()
};
var runner = new CommandLineBuilder(rootCommand)
    .UseHost(_ => new HostBuilder(), (builder) => builder
        .ConfigureServices((_, services) =>
        {
            services.AddSingleton<IStreamStoreConnection>(_ => {
                var path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Resurgent Residuals");
                if (!Directory.Exists(path)) { Directory.CreateDirectory(path); }
                var connection = new DataStore("Resurgent Residuals", Path.Combine(path, "Residuals.db"));
                connection.Connect();
                return connection;
            });
            services.AddSingleton<IConfiguredConnection>(sp
                => new ConfiguredConnection(
                    sp.GetRequiredService<IStreamStoreConnection>(),
                    new PrefixedCamelCaseStreamNameBuilder(),
                    new JsonMessageSerializer()));
            services.AddSingleton<IDispatcher>(_ => new Dispatcher("Resurgent Residuals - Main Dispatcher"));
            services.AddSingleton<ICommandPublisher>(sp => sp.GetRequiredService<IDispatcher>());


            services.AddSingleton<Merchants>();
        })
        .UseCommandHandler<ImportResidualsCommand, ImportResidualsCommand.Handler>())
        .UseDefaults().Build();

await runner.InvokeAsync(args);
