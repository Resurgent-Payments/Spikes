using System.Net.Http.Json;
using System.Net.Http.Headers;
using Xunit;
using System.Diagnostics;
using static System.Net.WebRequestMethods;
using System.Text;
using System.Text.Json;

namespace MiCampGatewaySample.Tests;

public class GatewayTests : IClassFixture<HostApplicationFixture>
{
    HostApplicationFixture _application;

    public GatewayTests(HostApplicationFixture fixture)
    {
        _application = fixture;
    }

    [Fact]
    public async Task Can_authenticate()
    {
var http = new HttpClient();
http.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
var creds = new MiCampCredentials("mcnorthapi1", "MCGws6sP2");
var opts = new JsonSerializerOptions
{
    IgnoreReadOnlyFields = false,
    IgnoreReadOnlyProperties = false
};

//var body = JsonSerializer.Serialize(creds, opts);
//var body = JsonContent.Create(creds, new MediaTypeHeaderValue ("application/json"), opts);

var bodyContent = JsonSerializer.Serialize(creds, opts);
var body = new StringContent(bodyContent, Encoding.UTF8, "application/json");


        var response = await http.PostAsync("https://gateway.mipaymentchoice.com/api/authenticate", body)
            .ConfigureAwait(false);
        var token = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
        Assert.NotEmpty(token);
        Debug.Write(token);


        //string apiUrl = "https://gateway.mipaymentchoice.com/api/authenticate";

        //using (HttpClient client = new HttpClient())
        //{
        //    // Set request headers
        //    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        //    // Create JSON request body
        //    string requestBody = "{\"Username\": \"mcnorthapi1\",\"Password\": \"MCGws6sP2\"}";

        //    try
        //    {
        //        HttpResponseMessage response = await client.PostAsync(apiUrl, new StringContent(requestBody, System.Text.Encoding.UTF8, "application/json"));

        //        if (response.IsSuccessStatusCode)
        //        {
        //            string responseContent = await response.Content.ReadAsStringAsync();
        //            Console.WriteLine(responseContent);
        //        }
        //        else
        //        {
        //            Console.WriteLine($"HTTP Error: {response.StatusCode}");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"An error occurred: {ex.Message}");
        //    }
        //}
    }

}

record MiCampCredentials(string Username, string Password);

public class HostApplicationFixture
{

}
