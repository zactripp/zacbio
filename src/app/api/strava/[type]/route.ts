import { NextResponse } from 'next/server';

const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
let refreshToken = process.env.STRAVA_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://www.strava.com/oauth/token";

let accessToken: string | null = null;
let expiresAt: number = 0;

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);

  if (accessToken && expiresAt > now) {
    console.log("Using existing access token");
    return accessToken;
  }

  console.log("Refreshing access token");

  const params = new URLSearchParams({
    client_id: clientId!,
    client_secret: clientSecret!,
    refresh_token: refreshToken!,
    grant_type: "refresh_token",
  });

  try {
    const response = await fetch(`${TOKEN_ENDPOINT}?${params}`, {
      method: "POST",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    accessToken = data.access_token;
    expiresAt = data.expires_at;
    refreshToken = data.refresh_token; // Update the refresh token

    console.log("New access token obtained. Expires at:", new Date(expiresAt * 1000).toLocaleString());
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

    // Always get a fresh access token
    const accessToken = await getAccessToken();
    console.log("Access token:", accessToken);

    let data;
    if (type === 'stats') {
      const url = 'https://www.strava.com/api/v3/athletes/7445195/stats';
      data = await fetchStravaData(url, accessToken as string);
    } else if (type === 'activities') {
      const url = 'https://www.strava.com/api/v3/athlete/activities?per_page=5';
      data = await fetchStravaData(url, accessToken as string);
      if (Array.isArray(data) && data.length > 0) {
        console.log('Most recent activity date:', new Date(data[0].start_date).toLocaleString());
      } else {
        console.log('No activities found or data is not an array');
      }
    } else {
      return NextResponse.json({ error: 'Invalid endpoint' }, { status: 400 });
    }

    // Return the response without cache headers
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    return NextResponse.json({ error: 'Failed to fetch Strava data' }, { status: 500 });
  }
}