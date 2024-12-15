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
import MonoSubHeader from "@/components/mono-subheader";

export default async function Home() {
  return (
    <main className="flex flex-col items-center w-full pt-2 pb-8">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        <div className="mb-4">
          <MonoHeader title="Zac Tripp" />
          <MonoSubHeader text="I'm a Veteran Marine Captain and Project Manager with a passion for building products that make a difference." />
        </div>
        <MonoImage
          src="/zact.jpeg"
          alt="Profile"
          width={650}
          height={300} // Adjust this to the actual height you want
  subtitle="Location Unknown"
/>
        <div className="mt-4 flex flex-col gap-4">
          <MonoCard title="Current">WIP.</MonoCard>

          {/* <MonoCard title="Work">
          Regimental Department Head and Manpower Project Manager: Facilitated Force Design through the overhaul of outdated table of organizations and equipment through correcting deficiencies and optimizing manpower allocation. Owning the operational project as a Program Manager from end-to-end ensuring engagement across multiple stakeholders to ensure positive outcome and implementation, overall correction of 238 deficiencies including overall Mission and Promulgation redesign. Direct project manager for 15 Marine Corps Functional Areas inspected during Commanding General Readiness Inspections in 2021 and 2024 and Inspector General Marine Corps Inspections in 2022 and 2024. Distinguished as “Noteworthy” in all 4 inspections.
          </MonoCard> */}
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
