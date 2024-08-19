export default async function About() {
  return (
    <main className="flex flex-col items-center w-full pt-2 pb-4">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        About
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
          <div>
            <h2>Stack</h2>
            <ul>
              <li>🦚 Frontend: Next.js, ReactJS</li>
              <li>💾 Backend: tRPC, Drizzle, Prisma</li>
              <li>🏎️ Languages: TypeScript, Python, SQL</li>
              <li>
                Other: MySQL, Vercel Postgres, Supabase, Tailwind, Solidity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
