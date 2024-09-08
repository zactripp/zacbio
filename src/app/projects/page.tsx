import Link from "next/link";

export default async function Projects() {
  return (
    <main className="flex flex-col items-center w-full pt-2 pb-4">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-4">
          <div>
            <h2>Projects</h2>
          </div>
          <div>
            <p className="font-mono font-bold">AG Studio</p>
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
          </div>
          <div>
            <p className="font-mono font-bold">Writing</p>
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
          </div>
          <div>
            <p className="font-mono font-bold">Gastimate</p>
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
          </div>
          <div>
            <p className="font-mono font-bold">HUD</p>
            <p>(wip) A speed and rpm heads up display for my F150</p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://twitter.com/acidgambit_/status/1821704864772006250"
            >
              Post
            </Link>
          </div>
          <div>
            <p className="font-mono font-bold">HFSS Quickstart</p>
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
          </div>
          <div>
            <p className="font-mono font-bold">Acid Gambit (brand)</p>
            <p>
              Fitness brand, creative outlet, and annual mid-5 fig side biz.
            </p>
            <Link
              className="underline underline-offset-1 text-sm font-mono text-slate-600"
              href="https://instagram.com/acidgambit"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
