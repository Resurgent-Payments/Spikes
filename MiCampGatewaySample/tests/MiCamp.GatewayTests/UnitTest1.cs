using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using System.Net.Http.Headers;

namespace MiCamp.GatewayTests;

public class UnitTest1 : IClassFixture<WebApplicationFactory<Program>>
{
    WebApplicationFactory<Program> _webApp;
    public UnitTest1(WebApplicationFactory<Program> webApp)
    {
        _webApp = webApp;
    }

    [Fact]
    public async Task Test1()
    {
        var httpFactory = _webApp.Services.GetRequiredService<IHttpClientFactory>();
        var client = httpFactory.CreateClient("MiCamp");
        var content = "{\"BeginDate\": \"2020-01-01T00:00:00\"}";

        var response = await client.PostAsync("/reports/transactions", new StringContent(content, new MediaTypeHeaderValue("application/json")));
        Assert.NotNull(response);

        var responseBody = await response.Content.ReadAsStringAsync();

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
