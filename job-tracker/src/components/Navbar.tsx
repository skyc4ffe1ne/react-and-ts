import { Link } from "react-router";
export default function NavBar() {
  return (
    <header className="flex justify-between w-full h-20 items-center px-4">
      <Link className="" to={"/"}>
        <span className="text-lg tracking-tight text-bold text-black">Job track</span>
        <span className="text-xs/5">Job Application Manager</span>
      </Link>

      <div className="flex gap-4 items-center justify-center">
        <button> languages</button>
        <button>theme </button>
        <button> sign in</button>
      </div>
    </header>
  );
}
