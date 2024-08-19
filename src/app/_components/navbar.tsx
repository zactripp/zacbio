export function Navbar() {
  return (
    <header>
      <div className="top-0 left-0 p-2 w-full flex justify-between items-end tracking-tighter">
        <div className="font-mono text-sm font-medium">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            matt wilder
          </a>
        </div>
        <nav className="items-center font-mono ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            home
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/projects"
          >
            projects
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/about"
          >
            about
          </a>
        </nav>
      </div>
    </header>
  );
}
