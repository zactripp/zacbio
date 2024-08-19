import { NextResponse } from 'next/server';

// async function getAccessToken() {
//   const response = await fetch('https://www.strava.com/oauth/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       client_id: process.env.STRAVA_CLIENT_ID,
//       client_secret: process.env.STRAVA_CLIENT_SECRET,
//       refresh_token: process.env.STRAVA_REFRESH_TOKEN,
//       grant_type: 'refresh_token',
//     }),
//   });

//   if (!response.ok) {
//     throw new Error('Failed to get access token');
//   }

//   const data = await response.json();
//   console.log("----------------------------")
//   console.log('ACCESS TOKEN 19AUG', data.access_token);
//   console.log("----------------------------")
//   return data.access_token;
// }

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
    console.log('ACCESS TOKEN 19AUG 8:09am', data.access_token);
    console.log("----------------------------");
    return data.access_token;
  } catch (error) {
    console.error('Error in getAccessToken:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    // const accessToken = "e508b5562e5210810171a1a88f894f12a12f4973";
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

    const data = await response.json();
    console.log("---------------------------------")
    console.log("DATA", data);
    console.log("---------------------------------")

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Strava stats:', error);
    return NextResponse.json({ error: 'Failed to fetch Strava stats' }, { status: 500 });
  }
}
