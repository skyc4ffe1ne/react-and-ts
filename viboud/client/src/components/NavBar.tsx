import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { Hamburger, X } from "./ui/icons";
import { Link } from "react-router";
import { LogoViboud } from "./ui/LogoViboud";
import { useSession } from "../contexts/SessionProvider";
import { logout as logoutServer } from "../utils/logout";

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);
  const { setSession, session } = useSession()

  const handleLogout = async () => {
    await logoutServer()
    setSession(null)
  }

  const headerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    let header = headerRef.current;
    let beforeH = document.createElement("div");
    header.before(beforeH);
    const observerOption = {
      rootMargin: "0px",
      threshold: 0.1,
    };
    function observerCallBack(
      entry: IntersectionObserverEntry[],
      self: IntersectionObserver,
    ) {
      headerRef.current?.classList.toggle(
        "stickying",
        !entry[0].isIntersecting,
      );
    }
    const observer = new IntersectionObserver(observerCallBack, observerOption);
    observer.observe(beforeH);

    return () => {
      observer.disconnect();
      beforeH.remove();
    };
  }, []);

  return (
    <header
      className="bg-background/75 fixed inset-0 top-0 left-0 z-50 mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4"
      ref={headerRef}
    >
      <Link to="/" className="flex-1 flex gap-2 items-center">
        {session ? (
          <>
            <div className="flex gap-2">
              <div className="size-8 rounded-full bg-gradient-to-b from-purple-400 to-blue-400" />
            </div>
            <div className="bg-gray-950/10 w-px h-6 dark:bg-white/10 -rotate-12" />
          </>
        ) : ""}
        <LogoViboud className="fill-foreground" />
      </Link>

      <nav className="hidden flex-1 justify-center text-sm/6 sm:flex">
        <ul>
          <li className="cursor-pointer"> How it Works </li>
        </ul>
      </nav>

      {session ? (
        <div className="flex-1 justify-end flex items-center gap-8">
          <Button variant="ghost" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
          </Button>
        </div>
      ) :
        (
          <div className="hidden flex-1 justify-end gap-2 sm:flex">
            <Link to="/login"><Button variant="ghost"> Login </Button> </Link>
            <Link to="/signup"><Button variant="accent"> SignUp </Button> </Link>
          </div>
        )
      }
      <div
        className="hover:bg-foreground/10 cursor-pointer rounded-md p-2 sm:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {!open ? (
          <Hamburger className="stroke-foreground size-5" />
        ) : (
          <X className="stroke-foreground size-5" />
        )}
      </div>

      {
        open && (
          <div className="bg-background/75 border-border absolute top-[100%] left-0 mx-auto flex w-full flex-col border-t px-4 py-8 backdrop-blur-lg">
            <ul>
              <li> How It Works </li>
            </ul>

            <Link to="/login/">
              <Button variant="ghost"> Login </Button>
            </Link>

            <Link to="/signup/">
              <Button variant="accent"> SignUp </Button>
            </Link>
          </div>
        )
      }
    </header >
  );
}
