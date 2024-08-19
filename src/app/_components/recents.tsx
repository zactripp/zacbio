"use client";

import { useState, useEffect } from "react";

interface StravaActivity {
  // Define the structure of a Strava activity here
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  // ... other fields
}

export default function Recents() {
  const [activities, setActivities] = useState<StravaActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("/api/strava?per_page=5");
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }
        const data = await response.json();
        setActivities(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching activities:", error);
        setError("Failed to load Strava activities");
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <div>Loading Strava activities...</div>;
  if (error) return <div>Error: {error}</div>;
  if (activities.length === 0) return <div>No activities found</div>;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recent Strava Activities</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="border p-4 rounded-lg">
            <h3 className="font-semibold">{activity.name}</h3>
            <p>Distance: {(activity.distance / 1000).toFixed(2)} km</p>
            <p>Time: {Math.floor(activity.moving_time / 60)} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
