export default function HeaderDashboard() {
  return (
    <div className="border-border border-b px-12">
      <header className="flex items-center justify-between py-4">
        <h2> Dashboard </h2>

        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full bg-gray-400" />
          <div className="">
            <h3 className="text-foreground text-sm"> Marco Rossi </h3>
            <p className="text-secondary-foreground text-sm"> Owner </p>
          </div>
        </div>
      </header>
    </div>
  );
}
