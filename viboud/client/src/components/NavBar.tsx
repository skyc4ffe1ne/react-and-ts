import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { Hamburger, X } from "./ui/icons";
import { Link } from "react-router";
export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

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
      <Link to="/" className="flex-1">
        <img src="/logo_viboud.svg" className="dark:invert-100" />
      </Link>

      <nav className="hidden flex-1 justify-center text-sm/6 sm:flex">
        <ul>
          <li className="cursor-pointer"> How it Works </li>
        </ul>
      </nav>

      <div className="hidden flex-1 justify-end gap-2 sm:flex">
        <Link to="/login"><Button variant="ghost"> Login </Button> </Link>
        <Link to="/signup"><Button variant="accent"> SignUp </Button> </Link>
      </div>

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

      {open && (
        <div className="bg-background/75 border-border absolute top-[100%] left-0 mx-auto flex w-full flex-col border-t px-4 py-8 backdrop-blur-lg">
          <ul>
            <li> How It Works </li>
          </ul>

          <Button variant="ghost"> Login </Button>
          <Button variant="accent"> SignUp </Button>
        </div>
      )}
    </header>
  );
}
// <div className="absolute top-0 left-0 w-full backdrop:bg-red-400 sm:hidden"> </div>
