import Image from "next/image";

export function Navbar() {
  return (
    <header>
      <div className="top-0 left-0 p-2 w-full flex justify-between items-center tracking-tighter">
        <div className="font-bold">
          <a className="hover:underline underline-offset-4" href="/">
            ACID GAMBIT
          </a>
        </div>
        <nav className="items-center font-mono ml-auto flex gap-4 sm:gap-6">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
        </nav>
      </div>
    </header>
  );
}
