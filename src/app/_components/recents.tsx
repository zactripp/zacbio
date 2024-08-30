"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useState, useEffect } from "react";

interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  start_date: string;
  type: string;
}

export default function Recents() {
  const [activities, setActivities] = useState<StravaActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestActivities = async () => {
      try {
        const response = await fetch("/api/strava/activities");
        if (!response.ok) {
          throw new Error("Failed to fetch latest activities");
        }
        const data = await response.json();
        const activitiesData = Array.isArray(data) ? data : [data];
        console.log("Fetched Strava activities:", activitiesData); // Added console log
        setActivities(activitiesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching latest activities:", error);
        setError("Failed to load latest Strava activities");
        setLoading(false);
      }
    };

    fetchLatestActivities();
  }, []);

  if (loading) return <div>Loading latest Strava activities...</div>;
  if (error) return <div>Error: {error}</div>;
  if (activities.length === 0) return <div>No recent activities found</div>;

  return (
    <div>
      <h2 className="pb-2">Latest Activities</h2>
      {/* <p className="text-xs font-mono mb-4">
        Live stream from Strava API v3. Local cache, revalidate every 15 mins
        due to rate limits
      </p> */}
      {activities.map((activity) => (
        <div key={activity.id} className="border p-4 rounded-lg mb-4">
          <div className="flex flex-row gap-2">
            <h3 className="font-semibold">{activity.name}</h3>
            <Badge variant="acid">
              {activity.type === "WeightTraining"
                ? "Weight Training"
                : activity.type}
            </Badge>
          </div>
          <p className="text-xs font-mono pb-2">
            {new Date(activity.start_date).toLocaleDateString()}
          </p>
          <p>
            {(activity.distance / 1609.34).toFixed(2)} miles |{" "}
            {Math.floor(activity.moving_time / 60) >= 60
              ? `${Math.floor(activity.moving_time / 3600)}h ${Math.floor((activity.moving_time % 3600) / 60)}m`
              : `${Math.floor(activity.moving_time / 60)}m`}
          </p>
        </div>
      ))}
    </div>
  );
}
