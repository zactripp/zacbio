import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { getAthleteStats, getRecentActivities } from "@/lib/strava";
import { AthleteStats, Activity } from "~/types/strava";

export default async function Recents() {
  let activities: Activity[] = [];

  try {
    // Fetch athlete stats and recent activities concurrently
    activities = await getRecentActivities(5);
  } catch (error) {
    console.error(error);
  }

  if (!activities) {
    return <div>Error loading recent activities.</div>;
  }

  return (
    <div>
      {/* <h2 className="pb-2">Latest Activities</h2>
      {activities.map((activity: Activity) => (
        <div key={activity.id} className="py-2">
          <Separator />
          <h3 className="font-semibold pt-2">{activity.name}</h3>

          <p className="text-xs font-mono pb-2">
            {new Date(activity.start_date).toLocaleDateString()}
          </p>
          <p>
            {Math.floor(activity.moving_time / 60) >= 60
              ? `${Math.floor(activity.moving_time / 3600)}h ${Math.floor((activity.moving_time % 3600) / 60)}m`
              : `${Math.floor(activity.moving_time / 60)}m`}{" "}
            |{" "}
            {activity.distance === 0
              ? "Whoop strap auto upload"
              : `${(activity.distance / 1609.34).toFixed(2)} miles`}
          </p>
          <Badge variant="acid">
            {activity.type === "WeightTraining"
              ? "Weight Training"
              : activity.type}
          </Badge>
        </div>
      ))} */}
      <h2 className="pb-4">Recent Activities</h2>
      {activities.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Error loading recent activities.
        </p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <div key={activity.id} className="pb-2">
              <Separator />
              <li key={activity.id}>
                <h3 className="font-semibold pt-2">{activity.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Distance: {(activity.distance / 1609.34).toFixed(2)} miles{" "}
                  <br />
                  Moving Time: {formatTime(activity.moving_time)} <br />
                  Date: {new Date(
                    activity.start_date_local
                  ).toLocaleString()}{" "}
                  <br />
                </p>
                <Badge variant="acid">
                  {activity.type === "WeightTraining"
                    ? "Weight Training"
                    : activity.type}
                </Badge>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}
