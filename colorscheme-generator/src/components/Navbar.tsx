import { useState } from "react";
import { HamburgerMenu, Moon, Sun } from "./ui/icons";
import { useTheme } from "../contexts/ThemeProvider";

const navigationLink = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];


function HamburgerOpen({ handleHamburger }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-gray-50 z-50 rounded-2xl">
      <header className="flex justify-between items-center h-14 px-4 @sm:px-6">
				Logo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 cursor-pointer"
          onClick={handleHamburger}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </header>

      <div>
        <ul className="flex flex-col gap-4 px-4 @sm:px-6">
          {navigationLink.map((el, idx) => (
            <li key={idx}>
                to={el.href}
                {el.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Navbar({}) {
  const [hamburger, setHamburger] = useState<boolean>(false);

	const {theme, setTheme} = useTheme()
  function handleHamburger() {
    setHamburger(!hamburger);
  }

  return (
    <div className="flex items-center justify-between gap-8 px-4 sm:px-6 pb-24 sm:pb-40 pt-6">
      <div className="flex items-center gap-4">
        <div  aria-label="home">
						Logo
        </div>

        <div className="flex gap-2 flex-nowrap items-center px-3 py-2 text-xs/4 whitespacee-nowrap ring ring-gray-950/8 hover:bg-gray-950/2 hover:ring-gray-950/10  rounded-full max-lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-4 fill-sky-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>

          <span className="font-medium"> We are cooking something good </span>
          <span className="size-0.75 rounded-full bg-current"></span>
          <div className="flex gap-0.5">
            <span> Learn more </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="-mr-1 size-4 stroke-gray-950/30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 max-sm:hidden">

        {navigationLink.map(({ href, name }, idx) => (
          <div
            key={idx}
            className="text-[12px]/3 text-gray-950 dark:text-white cursor-pointer"
          >
            {name}
          </div>
        ))}

        <div className="cursor-pointer">
          {theme === "light" ?
						<button
							onClick={() => setTheme("light")}
						> 
						<Moon className="size-6 stroke-blue-500" />
						</button>
						:
						 <Sun className="size-6 stroke-blue-500" />
					}
        </div>


        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1 inset-ring inset-ring-gray-950/8 dark:bg-white/15 dark:inset-ring-white/2"
        >
        </button>
      </div>
      <div className="flex gap-2.5 items-center sm:hidden">
        <button
          className="size-7 text-gray-950  dark:text-white hover:bg-gray-950/5 dark:hover:bg-white/10 inline-flex items-center justify-center rounded-md cursor-pointer"
          onClick={handleHamburger}
        >
          <HamburgerMenu className="size-6" />
        </button>
        <div className="cursor-pointer" >
          {theme === "dark" && <Moon className="size-6 stroke-blue-500" />}
          {theme === "light" && <Sun className="size-6 stroke-blue-500" />}
        </div>
      </div>

      {hamburger && <HamburgerOpen handleHamburger={handleHamburger} />}
    </div>
  );
}
