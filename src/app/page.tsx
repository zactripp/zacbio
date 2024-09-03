export const dynamic = "force-dynamic";

import Image from "next/image";
import StravaStats from "./_components/stats";
import Recents from "./_components/recents";
import { Separator } from "@/components/ui/separator";
import {
  getHelloMessage,
  getStravaActivities,
  getStravaStats,
} from "@/lib/strava";

export default async function Home() {
  let stats, stravaActivities;

  let hello;

  try {
    hello = await getHelloMessage();
    console.log(hello);
  } catch (error) {
    console.error("Error fetching hello message:", error);
    hello = { message: "Failed to fetch hello message" };
  }

  try {
    [stats, stravaActivities] = await Promise.all([
      getStravaStats(),
      getStravaActivities(),
    ]);
  } catch (error) {
    console.error("Error fetching Strava data:", error);
    // Log the API URL being used
    console.error(
      "API URL:",
      process.env.NEXT_PUBLIC_API_URL || "https://bio.acidgambit.com"
    );
    stats = null;
    stravaActivities = null;
  }

  return (
    <main className="flex flex-col items-center w-full pt-2 pb-8">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        <Image
          src="/spacex2.jpeg"
          alt="Profile"
          width={650}
          height={500}
          className="w-full h-auto"
        />
        <p className="pt-1 text-center text-sm text-gray-600">
          Falcon 9, 08-04-2024
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <div>
            <h2>Work</h2>
            <p>
              Technical Program Manager: Lead the Army Organization Server
              program, a data feed serving over 1 million end users. Partner
              with developers and analytics teams to enhance product features,
              optimize processes, and improve data accuracy by building internal
              analytics tools (angular/node, MS Access, VBA) and engineering
              enhancements.
            </p>
          </div>
          <Separator />
          <div>
            <h2>Stack</h2>
            <ul>
              <li>- Frontend: Next, React</li>
              <li>- Backend: tRPC, Drizzle, Prisma</li>
              <li>- Languages: TypeScript, Python, Go</li>
              <li>- Other: MySQL, Postgres, Tailwind, Solidity</li>
            </ul>
          </div>
          <Separator />
          <h2>API Test</h2>
          <p>{hello.message}</p>
          {stats ? (
            <StravaStats stats={stats} />
          ) : (
            <div>No Strava stats available</div>
          )}
          <Separator />
          {stravaActivities ? (
            <Recents activities={stravaActivities} />
          ) : (
            <div>No recent activities available</div>
          )}
        </div>
      </div>
    </main>
  );
}
