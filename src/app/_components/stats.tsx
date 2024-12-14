import Link from "next/link";
import React from "react";
import { get30dActivities, getAthleteStats } from "@/lib/strava";
import { AthleteStats } from "~/types/strava";
import MonoCard from "@/components/mono-card";
import MonoTable from "@/components/mono-table";
import { Badge } from "@/components/ui/badge";
import MonoBadge from "@/components/mono-badge";

// export const revalidate = 0;

export default async function Stats() {
  let data = [["NAME", "COUNT", "DISTANCE", "HOURS"]]; // Header row
  let stats: AthleteStats | null = null;
  let walkDuration: number | null = null;

  try {
    stats = await getAthleteStats();
    const moreStats = await get30dActivities();
    walkDuration = moreStats.walkDuration;

    if (stats) {
      // Add runs data
      data.push([
        "Runs",
        stats.recent_run_totals.count.toString(),
        `${(stats.recent_run_totals.distance / 1609).toFixed(2)} mi`,
        `${(stats.recent_run_totals.moving_time / 3600).toFixed(2)}`,
      ]);

      // Add rides data
      data.push([
        "Rides",
        stats.recent_ride_totals.count.toString(),
        `${(stats.recent_ride_totals.distance / 1609).toFixed(2)} mi`,
        `${(stats.recent_ride_totals.moving_time / 3600).toFixed(2)}`,
      ]);

      // Add walks data
      data.push([
        "Walks",
        "—",
        "—",
        walkDuration === null ? "—" : `${(walkDuration / 3600).toFixed(2)}`,
      ]);
    }
  } catch (error) {
    console.error(error);
  }

  if (!stats) {
    return <div>Error loading stats.</div>;
  }

  return (
    <div>
      <MonoCard title="Trailing 30d Strava Stats">
        <MonoTable data={data} />
        <MonoBadge value="strava api v3" />
      </MonoCard>
    </div>
  );
}
