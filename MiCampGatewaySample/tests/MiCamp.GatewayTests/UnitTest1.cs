using MiCamp.TestHost;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Transactions;
using static System.Net.WebRequestMethods;

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

        var content = "{}";

        var response = await client.GetAsync("customers");
        Assert.NotNull(response);

        var responseBody = await response.Content.ReadAsStringAsync();

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    // serialization setup.
    JsonSerializerOptions options = new JsonSerializerOptions
    {
        IgnoreReadOnlyFields = false,
        IgnoreReadOnlyProperties = false
    };

    [Fact]
    public async Task HardCodedCallForClientsSucceeds()
    {

        var cred = JsonSerializer.Serialize(new MiCampCredential("resu5984API", "5d9d435e5b994e83"), options);
        var credContent = new StringContent(cred, new MediaTypeHeaderValue("application/json"));
        var client = new HttpClient();
        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        client.BaseAddress = new Uri("https://gateway.mipaymentchoice.com");

        var jwtResponse = await client.PostAsync("/api/authenticate", credContent);
        var jwtStr = await jwtResponse.Content.ReadAsStringAsync();
        var jwt = JsonSerializer.Deserialize<MiCampAuthenticationResult>(jwtStr, options);

        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", jwt.BearerToken);

        var reqContent = """
            {
                "BeginDate": "2019-02-15T19:59:12.101Z",
            }
            """;
        var reqBody = new StringContent(reqContent, System.Text.Encoding.UTF8, new MediaTypeHeaderValue("application/json"));
        var custListResp = await client.PostAsync("/reports/transactions", reqBody);
        var listOfCusts = await custListResp.Content.ReadAsStringAsync();


        //var custResponse = await client.GetAsync("customers");
        //var listOfCustomers = await custResponse.Content.ReadAsStringAsync();
        Assert.True(false);
    }

    [Fact]
    public async Task Should_pull_list_of_customers()
    {
        string bearerToken = string.Empty;

        using (HttpClient client = new HttpClient())
        {
            // Set request headers
            client.BaseAddress = new Uri("https://gateway.mipaymentchoice.com/");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            // Create JSON request body
            string authParams = """
{
    "Username": "resu5984API",
    "Password": "5d9d435e5b994e83"
}
""";

            HttpResponseMessage response = await client.PostAsync("/api/authenticate", new StringContent(authParams, System.Text.Encoding.UTF8, "application/json"));

            if (response.IsSuccessStatusCode)
            {
                string responseContent = await response.Content.ReadAsStringAsync();
                bearerToken = JsonSerializer.Deserialize<MiCampAuthenticationResult>(responseContent, options).BearerToken;


                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", bearerToken);
                var reportParams = """
{
    "BeginDate": "2019-02-15T19:59:12.101Z",
}
""";
                var txnData = await client.PostAsync("/reports/transactions/", new StringContent(reportParams, System.Text.Encoding.UTF8, "application/json"));
                var data = await txnData.Content.ReadAsStringAsync();
            }
            else
            {
                Console.WriteLine($"HTTP Error: {response.StatusCode}");
            }
        }
    }
}
