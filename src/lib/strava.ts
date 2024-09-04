export async function getAccessToken() {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Strava credentials');
  }

  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Failed to refresh Strava token: ${response.status} ${response.statusText}`, errorText);
    throw new Error(`Failed to refresh Strava token: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function getStats({ accessToken }: { accessToken: string }) {
  const response = await fetch('https://www.strava.com/api/v3/athletes/7445195/stats', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Failed to fetch Strava stats: ${response.status} ${response.statusText}`, errorText);
    throw new Error(`Failed to fetch Strava stats: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getActivities({ accessToken }: { accessToken: string }) {
  const response = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=5', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Failed to fetch Strava activities: ${response.status} ${response.statusText}`, errorText);
    throw new Error(`Failed to fetch Strava activities: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// use api route
// export async function getStravaStats() {
//   // const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
//   const res = await fetch(`${apiUrl}/api/strava/stats`, { cache: "no-store" });
//   if (!res.ok) {
//     const errorText = await res.text();
//     console.error(`Failed to fetch stats: ${res.status} ${res.statusText}`, errorText);
//     throw new Error(`Failed to fetch stats: ${res.status} ${res.statusText}`);
//   }
//   return res.json();
// }

// export async function getStravaActivities() {
//   // const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
//   const res = await fetch(`${apiUrl}/api/strava/activities`, { cache: "no-store" });
//   if (!res.ok) {
//     const errorText = await res.text();
//     console.error(`Failed to fetch activities: ${res.status} ${res.statusText}`, errorText);
//     throw new Error(`Failed to fetch activities: ${res.status} ${res.statusText}`);
//   }
//   return res.json();
// }