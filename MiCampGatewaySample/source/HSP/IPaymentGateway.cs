namespace HSP;

//public interface IPaymentGateway
//{
//    Task<bool> AuthenticateAsync(IHostCredential credential);
//}

//public class MiCampPaymentGateway : IPaymentGateway
//{
//    public Task<bool> AuthenticateAsync(IHostCredential credential)
//    {
//        if (!(credential is MiCampCredentials creds)) { throw new InvalidCredentialException(typeof(MiCampCredentials), credential.GetType()); }


//    }

//    ///{
//    /// "SessionId":"kSYgafbnoKPrdoVNSO0S",
//    /// "UserName":"mcnorthapi1",
//    /// "DisplayName":"",
//    /// "BearerToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InMwZyJ9.eyJpYXQiOjE2OTc3NjQzODMsImV4cCI6MTY5ODk3Mzk4MywicHJlZmVycmVkX3VzZXJuYW1lIjoibWNub3J0aGFwaTEiLCJyb2xlcyI6WyJVc2VyIiwiQVBJIiwiTWVyY2hhbnQiXSwidmsiOjQyLCJ1ayI6MTAxOTcsIml0IjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklqaGxNVE0wWldWaU5ESTNOMkZsWldKaVlXRXdOV1V6WXpCbU5EWTFaRFV4SWl3aWRIbHdJam9pU2xkVUluMC5leUp1WW1ZaU9qRTJPVGMzTmpRek9ETXNJbVY0Y0NJNk1UWTVOemMyTnprNE15d2lhWE56SWpvaWFIUjBjRG92TDJ4dlkyRnNhRzl6ZERvMU1EQXdJaXdpWVhWa0lqcGJJbWgwZEhBNkx5OXNiMk5oYkdodmMzUTZOVEF3TUM5eVpYTnZkWEpqWlhNaUxDSnNaV2RoWTNsMWFTSmRMQ0pqYkdsbGJuUmZhV1FpT2lKd2FIaG5ZWFJsTG5KbGMzUmhjR2tpTENKemRXSWlPaUl4TURFNU55SXNJbUYxZEdoZmRHbHRaU0k2TVRZNU56YzJORE00TXl3aWFXUndJam9pYkc5allXd2lMQ0pUZEdGMGRYTWlPaUpCUTFSSlZrVWlMQ0pKYzBGUVNWVnpaWElpT2lKVWNuVmxJaXdpUzJWNUlqb2lNVEF4T1RjaUxDSlZjMlZ5Ym1GdFpTSTZJbTFqYm05eWRHaGhjR2t4SWl3aVZYTmxja1pwY25OMFRtRnRaU0k2SWsxcFEyRnRjQ0lzSWxWelpYSk1ZWE4wVG1GdFpTSTZJa0ZRU1NJc0lsUmxibUZ1ZEVsa0lqb2lNU0lzSW5KdmJHVWlPaUpOWlhKamFHRnVkQ0lzSWsxbGNtTm9ZVzUwUzJWNUlqcGJJalF5SWl3aU5ESWlYU3dpUW5WemFXNWxjM05KYm1adlMyVjVJam9pTkRraUxDSlNaWE5sYkd4bGNrdGxlU0k2SWpFd05pSXNJazFsY21Ob1lXNTBTVVFpT2lJeE1qTTBOVFkzT0Rrd01USWlMQ0pOWlhKamFHRnVkRWxFTWlJNklpSXNJazFsY21Ob1lXNTBUbUZ0WlNJNklrMXBRMkZ0Y0NCT2IzSjBhQ0JVWlhOMElpd2lRWFYwYjFObGRIUnNaVWh2ZFhJaU9pSXlJaXdpYzJOdmNHVWlPbHNpYkdWbllXTjVkV2tpWFN3aVlXMXlJanBiSW5CM1pDSmRMQ0pCYzNOdlkybGhkR1ZrVFdWeVkyaGhiblJMWlhseklqcGJleUpOWlhKamFHRnVkRXRsZVNJNklqUXlJaXdpVFdWeVkyaGhiblJPWVcxbElqb2lUV2xEWVcxd0lFNXZjblJvSUZSbGMzUWlmVjE5Lk5aN2lVOWUxdGhGdGxQZVpBTXc1UXhXeWlkbkg4VTcxZjZOa3BZc0lQbEdodjRNSVl6U2NCWjlzaGVfTnBIMlNDNElRMXNKNTAxRWVZam8xMjBrXzJWZldfT19PcElXYmJBWnJ3dVZjdDRqR3NCSE94ZE5YZlNLWlo3NW1rMUltWEExeWM3M1U4VWctVGt4dkRaUkdBWTZDZlk2UEVFd2VGYXN3MndUUmF1OTNEWVF3T1pZRlZPUXBwN1hBanhpUkF3cHFsS2ViQng4UUVBU1V5a1h4M1U3a3Z4V0xZSk0tS1RKVlAyLUpXelR0N2l6QlJ2aWtVWUdjNHVwckNQRU9NZEktWk1zWTVockdYdGg3SkxyTmxNVUZzd1I5TE1DU3ZFWFRNS0JDU2t5d2ZkYUZ4TE5LTGhPQkZkZDc3VnR1MXBUWGwyV01QWlowWGZXUHdVMld5USIsInRpZCI6MX0.c6yaEOHbvBl9vk0ZRrmFIKaMeuQZBE9qCzfbMLhIDDgvEBTbC0gnAITBBj7cZTBsSSTAOaLTSVrR6_rqTYMPK7mwVpeDJ6UsZ7j0qYjGunK9gPdxX7O3zNTvkVBh8LbaiSIdt6tyyC7hHp1CM9Yz-1mQFTaB00e9sEte_Mup04Q",
//    /// "ProfileUrl":"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3E .path%7B%7D %3C/style%3E %3Cg id='male-svg'%3E%3Cpath fill='%23556080' d='M1 92.84V84.14C1 84.14 2.38 78.81 8.81 77.16C8.81 77.16 19.16 73.37 27.26 69.85C31.46 68.02 32.36 66.93 36.59 65.06C36.59 65.06 37.03 62.9 36.87 61.6H40.18C40.18 61.6 40.93 62.05 40.18 56.94C40.18 56.94 35.63 55.78 35.45 47.66C35.45 47.66 32.41 48.68 32.22 43.76C32.1 40.42 29.52 37.52 33.23 35.12L31.35 30.02C31.35 30.02 28.08 9.51 38.95 12.54C34.36 7.06 64.93 1.59 66.91 18.96C66.91 18.96 68.33 28.35 66.91 34.77C66.91 34.77 71.38 34.25 68.39 42.84C68.39 42.84 66.75 49.01 64.23 47.62C64.23 47.62 64.65 55.43 60.68 56.76C60.68 56.76 60.96 60.92 60.96 61.2L64.74 61.76C64.74 61.76 64.17 65.16 64.84 65.54C64.84 65.54 69.32 68.61 74.66 69.98C84.96 72.62 97.96 77.16 97.96 81.13C97.96 81.13 99 86.42 99 92.85L1 92.84Z'/%3E%3C/g%3E%3C/svg%3E",
//    /// "ResponseStatus":{}
//    /// }

//}

public interface IHostCredential { };
public class InvalidCredentialException : Exception
{
    public Type Expected { get; }
    public Type Actual { get; }

    public InvalidCredentialException(Type expected, Type actual)
    {
        Expected = expected;
        Actual = actual;
    }
}


// MiCamp records.
public record MiCampCredentials(string Username, string Password) : IHostCredential;
public record MiCampAuthenticatedToken(string SessionId, string UserName, string DisplayName, string BearerToken, string ProfileUri, dynamic ResponseStatus);