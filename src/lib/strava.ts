import { AthleteStats, Activity } from '~/types/strava';

interface AccessTokenResponse {
  token_type: string;
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
}

export async function getAccessToken(): Promise<string> {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.statusText}`);
  }

  const data: AccessTokenResponse = await response.json();
  console.log(data);
  return data.access_token;
}


export async function getAthleteStats(): Promise<AthleteStats> {
  const accessToken = await getAccessToken();
  console.log("access token from stats fetch: ", accessToken);
  const athleteId = process.env.STRAVA_ATHLETE_ID;

  const response = await fetch(
    `https://www.strava.com/api/v3/athletes/${athleteId}/stats`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch athlete stats: ${response.statusText}`);
  }

  const data: AthleteStats = await response.json();
  return data;
}

export async function getRecentActivities(perPage: number = 5): Promise<Activity[]> {
  const accessToken = await getAccessToken();
  console.log("access token from activities fetch: ", accessToken);

  const response = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?per_page=${perPage}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch activities: ${response.statusText}`);
  }

  const data: Activity[] = await response.json();
  return data;
}