export const dynamic = "force-dynamic";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Stats from "./_components/stats";
import Recents from "./_components/recents";
import MonoCard from "@/components/mono-card";
import MonoImage from "@/components/mono-image";
import MonoHeader from "@/components/mono-header";
import MonoBadge from "@/components/mono-badge";
import { List, ListItem } from "@/components/mono-list";
import MonoTable from "@/components/mono-table";
import MonoFooter from "@/components/mono-footer";

export default async function Home() {
  return (
    <main className="flex flex-col items-center w-full pt-2 pb-8">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        <div className="mb-4">
          <MonoHeader title="Zac Tripp" />
        </div>
        <MonoImage
          src="/spacex2.jpeg"
          alt="Profile"
          width={650}
          height={300}
          subtitle="Falcon 9, 08-04-2024"
        />
        <div className="mt-4 flex flex-col gap-4">
          <MonoCard title="Current">WIP.</MonoCard>

          <MonoCard title="Work">
            Technical Program Manager: Lead the Army Organization Server
            program, a data feed serving over 1 million end users. Partner with
            developers and analytics teams to enhance product features, optimize
            processes, and improve data accuracy by building internal analytics
            tools (angular/node, MS Access, VBA) and engineering enhancements.
          </MonoCard>
          <MonoCard title="Stack">
            <List>
              <ListItem>Frontend: Next, React</ListItem>
              <ListItem>Backend: tRPC, Drizzle, Prisma</ListItem>
              <ListItem>Languages: TypeScript, Python, Go</ListItem>
              <ListItem>Other: MySQL, Postgres, Tailwind, Solidity</ListItem>
            </List>
          </MonoCard>
        </div>
      </div>
    </main>
  );
}
