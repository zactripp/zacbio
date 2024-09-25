export interface ActivityTotals {
  count: number;
  distance: number;
  moving_time: number;
  elevation_gain: number;
  achievement_count: number;
}

export interface AthleteStats {
  biggest_ride_distance: number;
  biggest_climb_elevation_gain: number;
  recent_ride_totals: ActivityTotals;
  recent_run_totals: ActivityTotals;
  recent_swim_totals: ActivityTotals;
  ytd_ride_totals: ActivityTotals;
  ytd_run_totals: ActivityTotals;
  ytd_swim_totals: ActivityTotals;
  all_ride_totals: ActivityTotals;
  all_run_totals: ActivityTotals;
  all_swim_totals: ActivityTotals;
}

export interface Activity {
  id: number;
  name: string;
  distance: number; // in meters
  moving_time: number; // in seconds
  elapsed_time: number; // in seconds
  total_elevation_gain: number; // in meters
  type: string;
  start_date: string; // ISO 8601 date string
  start_date_local: string; // ISO 8601 date string
  timezone: string;
  utc_offset: number;
  average_speed: number; // in m/s
  max_speed: number; // in m/s
  // other fields
}