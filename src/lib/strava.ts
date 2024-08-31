const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

const url = 'https://www.strava.com/oauth/token';

export async function getAccessToken() {
  if (!clientId || !clientSecret || !refreshToken) {
    console.error("Missing environment variables");
    throw new Error("Missing environment variables");
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Strava API response:", data);
    return data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
}