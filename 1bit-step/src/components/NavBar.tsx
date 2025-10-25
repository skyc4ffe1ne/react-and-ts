import { useState } from "react";

export function Hamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M4 6h16" />
    </svg>
  );
}

export function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

type Link = "Home" | "Daily Task" | "Extra Task";

type NavLinks = ["Home", "Daily Task", "Extra Task"];

const navLinks: NavLinks = ["Home", "Daily Task", "Extra Task"];

export default function NavBar() {
  const [hamburger, setHamburger] = useState<boolean>(false);

  const [activeLink, setActiveLink] = useState<string>(navLinks[0]);

  function isActive(link: Link) {
    return activeLink === link;
  }
  return (
    <header className="relative flex h-[80px] w-full items-center justify-between px-4 md:px-8">
      <div className="cursor-pointer font-mono text-lg">1-bit-step</div>
      <nav className="hidden md:block">
        <ul className="flex cursor-pointer gap-4 font-mono">
          {navLinks.map((link, idx) => (
            <li
              className="hover:text-foreground text-secondary-foreground border border-transparent"
              key={idx}
              onClick={() => setActiveLink(link)}
            >
              {isActive(link) ? (
                <>
                  <span className="text-secondary-foreground">[</span>
                  <span className="text-foreground">{link}</span>
                  <span className="text-secondary-foreground">]</span>
                </>
              ) : (
                <>{link}</>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button className="bg-muted grid size-8 cursor-pointer place-content-center rounded-md md:hidden">
        {hamburger ? (
          <Close className="size-4" onClick={() => setHamburger(false)} />
        ) : (
          <Hamburger className="size-4" onClick={() => setHamburger(true)} />
        )}
      </button>

      {hamburger && (
        <nav className="bg-background absolute top-[60px] right-0 z-10 h-screen w-full px-2">
          <ul>
            {navLinks.map((link) => (
              <li className="cursor-pointer rounded-lg px-2 py-4 hover:bg-gray-100">
                {link}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
