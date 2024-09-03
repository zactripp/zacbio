import { NextResponse } from 'next/server';

const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

const url = 'https://www.strava.com/oauth/token';

async function getAccessToken() {
  // const now = Math.floor(Date.now() / 1000);

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 });
  }
  
  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    const accessToken = data.access_token;

    // console.log("New access token obtained. Expires at:", new Date(expiresAt * 1000).toLocaleString());
    console.log("------------- new access token:", accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error in getAccessToken:', error);
    throw error;
  }
}

async function fetchStravaData(url: string, accessToken: string) {
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    },
    cache: 'no-store' // Disable caching for this request
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
  }

  return response.json();
}

export async function GET(
  request: Request,
  { params }: { params: { type: string } }
) {
  try {
    const { type } = params;
    // const accessToken = await getAccessToken();
    const accessToken = "185599f123033294b25f4ab7300d62207973be9f";

    let data;
    if (type === 'stats') {
      const url = 'https://www.strava.com/api/v3/athletes/7445195/stats';
      data = await fetchStravaData(url, accessToken as string);
    } else if (type === 'activities') {
      const url = 'https://www.strava.com/api/v3/athlete/activities?per_page=5';
      data = await fetchStravaData(url, accessToken as string);
    } else {
      return NextResponse.json({ error: 'Invalid endpoint' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    return NextResponse.json({ error: 'Failed to fetch Strava data' }, { status: 500 });
  }
}