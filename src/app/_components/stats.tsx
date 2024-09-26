import Link from "next/link";
import React from "react";
import { getAthleteStats } from "@/lib/strava";
import { AthleteStats } from "~/types/strava";

// export const revalidate = 0;

export default async function Stats() {
  // const stats: AthleteStats = await getAthleteStats();

  let stats: AthleteStats | null = null;

  try {
    stats = await getAthleteStats();
  } catch (error) {
    console.error(error);
  }

  if (!stats) {
    return <div>Error loading stats.</div>;
  }

  return (
    <div>
      <h2>
        Recent{" "}
        <Link
          href="https://www.strava.com/athletes/7445195"
          className="underline underline-offset-2 hover:text-orange-500"
        >
          Strava
        </Link>{" "}
        Stats
      </h2>
      <p className="text-xs font-mono">live stream from strava api v3.</p>

      <div className="flex flex-row gap-8">
        <div>
          <p className="font-mono font-bold pt-2">Runs</p>
          <ul>
            <li>Count: {stats.recent_run_totals.count}</li>
            <li>
              Distance: {(stats.recent_run_totals.distance / 1609).toFixed(2)}{" "}
              mi
            </li>
            <li>
              Time: {(stats.recent_run_totals.moving_time / 3600).toFixed(2)}{" "}
              hours
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono font-bold pt-2">Rides</p>
          <ul>
            <li>Count: {stats.recent_ride_totals.count}</li>
            <li>
              Distance: {(stats.recent_ride_totals.distance / 1609).toFixed(2)}{" "}
              mi
            </li>
            <li>
              Time: {(stats.recent_ride_totals.moving_time / 3600).toFixed(2)}{" "}
              hours
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
