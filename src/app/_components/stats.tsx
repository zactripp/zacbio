"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface StravaStats {
  recent_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
  };
  recent_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
  };
}

export default function StravaStats() {
  const [stats, setStats] = useState<StravaStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const CACHE_KEY = "stravaStats";
  const CACHE_DURATION = 900000; // 15 min in milliseconds

  function getFromCache() {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
    return null;
  }

  function setToCache(data: StravaStats) {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  }

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Check cache first
        const cachedStats = getFromCache();
        if (cachedStats) {
          setStats(cachedStats);
          setLoading(false);
          return;
        }

        // If not in cache, fetch from API
        const response = await fetch("/api/strava");
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await response.json();
        setStats(data);
        setToCache(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
        setError("Failed to load Strava stats");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading)
    return (
      <div className="pt-8 text-sm font-mono">Loading Strava stats...</div>
    );
  if (error)
    return <div className="pt-8 text-sm font-mono">Error: {error}</div>;
  if (!stats)
    return <div className="pt-8 text-sm font-mono">No stats available</div>;

  return (
    <div className="pt-8">
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
        live stream from strava api v3. Local cache, revalidate every 15 mins
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
        {/* Add more stats as needed */}
      </div>
    </div>
  );
}
