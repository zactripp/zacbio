import Link from "next/link";

export default function StravaStats({ stats }: { stats: any }) {
  return (
    <div>
      <h2>
        Trailing 28 Day{" "}
        <Link
          href="https://www.strava.com/athletes/7445195"
          className="underline underline-offset-2 hover:text-orange-500"
        >
          Strava
        </Link>{" "}
        Stats
      </h2>
      <p className="text-xs font-mono">
        live stream from strava api v3. Local cache, revalidate every 10 mins
        due to ratelimits
      </p>

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
