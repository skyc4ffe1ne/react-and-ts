export default function PreviewApp() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="border-border mt-16 w-full rounded-lg border p-2 shadow-lg">
        <div className="h-[70vh] w-full rounded-md bg-gray-200 dark:bg-gray-800/20" />
      </div>

      <div className="from-background via-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent lg:h-1/4" />
    </div>
  );
}
