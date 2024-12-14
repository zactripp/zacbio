import MonoCard from "@/components/mono-card";
import MonoHeader from "@/components/mono-header";
import Link from "next/link";

export default async function Projects() {
  return (
    <main className="flex flex-col items-center w-full pt-2 pb-4">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-4">
          <MonoHeader title="Projects" />

          <MonoCard title="AG Studio">
            <p>
              Cool fitness app. 500+ subs, stripe integration,
              nextjs/ts/mysql/drizzle/trpc
            </p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://app.acidgambit.com"
            >
              app.acidgambit.com
            </Link>
          </MonoCard>

          <MonoCard title="IntegrateRx">
            <p>
              Designing and building webapp to connect clinics and pharmacies
              for compounding therapies while integrating with the largest
              ePrescription provider in the Nation.
              nextjs/ts/postgres/drizzle/trpc
            </p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://github.com/mattbrc/integrateRx"
            >
              github
            </Link>
          </MonoCard>

          <MonoCard title="Writing">
            <p>
              Writing about reaching peak strength, speed, and performance
              through the use of training fundamentals, accessible lifestyle
              changes, application of scientific literature, and personal and
              professional training anecdotes. 2k+ subs
            </p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://acidgambit.substack.com/"
            >
              Substack
            </Link>
          </MonoCard>

          <MonoCard title="Gastimate">
            <p>
              A method of computing gas cost in USD for foundry users. Convert
              estimated function gas usage to USD.
            </p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://github.com/mattbrc/gastimate"
            >
              Github
            </Link>
          </MonoCard>

          <MonoCard title="HUD">
            <p>(wip) A speed and rpm heads up display for my F150</p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://twitter.com/acidgambit_/status/1821704864772006250"
            >
              Post
            </Link>
          </MonoCard>

          <MonoCard title="HFSS Quickstart">
            <p>
              Electromagnetic spectrum simulation Python Interface to quickly
              get started with design + analysis.
            </p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://github.com/mattbrc/hfss-quickstart"
            >
              Github
            </Link>
          </MonoCard>

          <MonoCard title="Acid Gambit (brand)">
            <p>
              Fitness brand, creative outlet, and annual mid-5 fig side biz.
            </p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://instagram.com/acidgambit"
            >
              Instagram
            </Link>
          </MonoCard>
        </div>
      </div>
    </main>
  );
}
