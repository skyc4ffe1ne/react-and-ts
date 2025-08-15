export default function Navbar() {
  return (
    <header className="border-border flex h-[80px] w-full items-center justify-between border-b px-12 shadow-xs">
      <div className="">logo</div>

      <div className="">
        <button className="focus:outline-accent-foreground cursor-pointer rounded-md px-4 py-2 text-sm/5 font-medium shadow-md focus:outline-2 focus:outline-offset-2">
          {" "}
          Download{" "}
        </button>
      </div>
    </header>
  );
}
