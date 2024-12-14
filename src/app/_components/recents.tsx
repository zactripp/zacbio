import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { getAthleteStats, getRecentActivities } from "@/lib/strava";
import { AthleteStats, Activity } from "~/types/strava";
import MonoCard from "@/components/mono-card";
import MonoTable from "@/components/mono-table";
import MonoBadge from "@/components/mono-badge";

export default async function Recents() {
  let activities: Activity[] = [];
  let data = [["NAME", "TYPE", "DISTANCE", "TIME", "DATE"]]; // Header row

  try {
    activities = await getRecentActivities(5);

    if (activities.length > 0) {
      activities.forEach((activity) => {
        data.push([
          activity.name,
          activity.type === "WeightTraining"
            ? "Weight Training"
            : activity.type,
          `${(activity.distance / 1609.34).toFixed(2)} mi`,
          formatTime(activity.moving_time),
          new Date(activity.start_date_local).toLocaleString(),
        ]);
      });
    }
  } catch (error) {
    console.error(error);
  }

  if (!activities) {
    return <div>Error loading recent activities.</div>;
  }

  return (
    <div>
      <MonoCard title="Recent Activities">
        <MonoTable data={data} />
        <MonoBadge value="strava api v3" />
      </MonoCard>
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
