export async function getStravaStats() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://app.acidgambit.com';
  const res = await fetch(`${apiUrl}/api/strava/stats`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
}

export async function getStravaActivities() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://app.acidgambit.com';
  const res = await fetch(`${apiUrl}/api/strava/activities`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch activities");
  return res.json();
}