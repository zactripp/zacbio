import { NextResponse } from 'next/server';

const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

const userId = 7445195; // Your Strava user id
const TOKEN_ENDPOINT = "https://www.strava.com/oauth/token";
const ATHLETES_ENDPOINT = `https://www.strava.com/api/v3/athletes/${userId}`;

async function getAccessToken() {
  const body = JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    // console.log("New access token obtained:", data.access_token);
    return data.access_token;
  } catch (error) {
    console.error('Error in getAccessToken:', error);
    throw error;
  }
}

export async function GET(
  request: Request,
  { params }: { params: { type: string } }
) {
  try {
    const { type } = params;

    // Define revalidate duration (10 minutes for production)
    const REVALIDATE_TIME = 600;

    let data;
    if (type === 'stats') {
      const accessToken = await getAccessToken();
      const url = 'https://www.strava.com/api/v3/athletes/7445195/stats';
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        },
        next: { revalidate: REVALIDATE_TIME }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
      }

      data = await response.json();
    } else if (type === 'activities') {
      const accessToken = await getAccessToken();
      const url = 'https://www.strava.com/api/v3/athlete/activities?per_page=5';
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        },
        next: { revalidate: REVALIDATE_TIME }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
      }

      data = await response.json();
      
      if (Array.isArray(data) && data.length > 0) {
        console.log('Most recent activity date:', new Date(data[0].start_date).toLocaleString());
      } else {
        console.log('No activities found or data is not an array');
      }
    } else {
      return NextResponse.json({ error: 'Invalid endpoint' }, { status: 400 });
    }

    // Return the response with cache headers
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': `s-maxage=${REVALIDATE_TIME}, stale-while-revalidate`,
      },
    });
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    return NextResponse.json({ error: 'Failed to fetch Strava data' }, { status: 500 });
  }
}