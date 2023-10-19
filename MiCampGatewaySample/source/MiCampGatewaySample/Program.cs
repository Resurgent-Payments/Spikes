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


/// <summary>
/// Using this in c# exposes your product to PCI compliance.
/// </summary>
/// <param name="CustomerKey"></param>
/// <param name="CustomerNumber"></param>
/// <param name="ExpirationDate"></param>
/// <param name="NameOnCard"></param>
/// <param name="StreetAddress"></param>
/// <param name=""></param>
public record CardTokenizationRequest(
    int CustomerKey,
    string CustomerNumber,
    string ExpirationDate,
    string NameOnCard,
    string StreetAddress,
    string PostalCode,
    TokenFormats TokenFormat = TokenFormats.Uid
);

public enum TokenFormats
{
    Uid,
    Integer,
    CardFormat
}

public record CardTokenizationResponse(
    int MerchantKey,
    int CustomerKey,
    string CardNumber,
    string ExpirationDate,
    string CardType,
    string NameOnCard,
    string StreetAddress,
    string PostalCode,
    string Token
);