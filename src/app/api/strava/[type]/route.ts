import { NextResponse } from 'next/server';

async function getAccessToken() {
  const params = new URLSearchParams({
    client_id: process.env.STRAVA_CLIENT_ID as string,
    client_secret: process.env.STRAVA_CLIENT_SECRET as string,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN as string,
    grant_type: 'refresh_token',
  });

  try {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText}. ${errorText}`);
    }

    const data = await response.json();
    console.log("----------------------------");
    console.log('ACCESS TOKEN', data.access_token);
    console.log("----------------------------");
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
    const accessToken = await getAccessToken();
    const { type } = params;

    let data;
    if (type === 'stats') {
      const response = await fetch(
        'https://www.strava.com/api/v3/athletes/7445195/stats',
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      data = await response.json();
    } else if (type === 'activities') {
      const response = await fetch(
        'https://www.strava.com/api/v3/athlete/activities?per_page=5',
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      data = await response.json(); // Return all 5 activities
    } else {
      return NextResponse.json({ error: 'Invalid endpoint' }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    return NextResponse.json({ error: 'Failed to fetch Strava data' }, { status: 500 });
  }
}