export async function getStravaStats() {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
  const apiUrl = typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
  const res = await fetch(`${apiUrl}/api/strava/stats`, { cache: "no-store" });
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Failed to fetch stats: ${res.status} ${res.statusText}`, errorText);
    throw new Error(`Failed to fetch stats: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getStravaActivities() {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
  const apiUrl = typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
  const res = await fetch(`${apiUrl}/api/strava/activities`, { cache: "no-store" });
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Failed to fetch activities: ${res.status} ${res.statusText}`, errorText);
    throw new Error(`Failed to fetch activities: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

// export async function getHelloMessage() {
//   const apiUrl = typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_API_URL || 'https://bio.acidgambit.com';
//   const res = await fetch(`${apiUrl}/api/hello`, { cache: "no-store" });
//   if (!res.ok) {
//     const errorText = await res.text();
//     console.error(`Failed to fetch hello message: ${res.status} ${res.statusText}`, errorText);
//     throw new Error(`Failed to fetch hello message: ${res.status} ${res.statusText}`);
//   }
//   return res.json();
// }