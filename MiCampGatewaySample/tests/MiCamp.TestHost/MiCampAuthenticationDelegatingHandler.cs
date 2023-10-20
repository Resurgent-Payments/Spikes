using System.Net.Http.Headers;
using System.Text.Json;

namespace MiCamp.TestHost;


public class MiCampAuthenticationDelegatingHandler : DelegatingHandler
{
    private static JsonSerializerOptions _serializerOptions = new JsonSerializerOptions
    {
        IgnoreReadOnlyFields = false,
        IgnoreReadOnlyProperties = false
    };

    private readonly MiCampAuthenticationDelegatingHandlerOptions _options;
    private readonly HttpClient _httpClient;
    private static string _bearerToken = string.Empty;

    public MiCampAuthenticationDelegatingHandler(MiCampAuthenticationDelegatingHandlerOptions options, IHttpClientFactory clientFactory)
    {
        _options = options;
        _httpClient = clientFactory.CreateClient();
        _httpClient.BaseAddress = _options.Host;
        _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    }

    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrEmpty(_bearerToken))
        {
            await GetTokenAsync();
        }

        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);
        var response = await base.SendAsync(request, cancellationToken);

        if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized || response.StatusCode == System.Net.HttpStatusCode.Forbidden)
        {
            await GetTokenAsync();
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);
            response = await base.SendAsync(request, cancellationToken);
        }

        return response;
    }

    private async Task GetTokenAsync()
    {
        var req = JsonSerializer.Serialize(_options.Credential, _serializerOptions);

        var msg = await _httpClient.PostAsync("/api/authenticate", new StringContent(req, new MediaTypeHeaderValue("application/json")));
        var authString = await msg.Content.ReadAsStringAsync();
        var auth = JsonSerializer.Deserialize<MiCampAuthenticationResult>(authString, _serializerOptions);

        if (!string.IsNullOrWhiteSpace(auth!.Error))
        {
            throw new GatewayAuthenticationException(auth!.Error);
        }

        Interlocked.Exchange(ref _bearerToken, auth.BearerToken);
    }
}

public class MiCampAuthenticationDelegatingHandlerOptions
{
    public MiCampCredential Credential { get; set; }
    public Uri Host { get; set; }
}

public record MiCampCredential(string Username, string Password);
public record MiCampAuthenticationResult(string SessionId, string UserName, string DisplayName, string BearerToken, string ProfileUrl, string LogId, string Error);

public class GatewayAuthenticationException : Exception
{
    public GatewayAuthenticationException(string message) : base(message)
    {

    }
}