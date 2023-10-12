using System.Net.Http.Json;
using System.Text.Json;

var creds = new MiCampCredentials("...", "...");

Console.WriteLine("Sending Request for API Token:");
Console.WriteLine(JsonSerializer.Serialize(creds));

var http = new HttpClient();
var response = await http.PostAsync("https://gateway.mipaymentchoice.com/authenticate", JsonContent.Create(creds))
    .ConfigureAwait(false);
var token = await response.Content.ReadAsStringAsync().ConfigureAwait(false);


Console.WriteLine("\n");
Console.WriteLine("Response from Gateway API:");
Console.WriteLine(token);
