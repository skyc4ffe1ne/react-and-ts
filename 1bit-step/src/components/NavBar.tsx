export default function NavBar() {
  return (
    <header className="flex h-[80px] w-full items-center justify-between px-8">
      <div className="cursor-pointer font-mono text-lg">1-bit-step</div>
      <nav>
        <ul className="flex cursor-pointer gap-4 font-mono">
          <li className="border-accent-foreground border border-dashed">
            <span className="text-secondary-foreground">[</span>Home
            <span className="text-secondary-foreground">]</span>
          </li>
          <li className="text-secondary-foreground border border-transparent">
            {" "}
            Daily Task{" "}
          </li>
          <li className="text-secondary-foreground"> Extra Task </li>
        </ul>
      </nav>
    </header>
  );
}
