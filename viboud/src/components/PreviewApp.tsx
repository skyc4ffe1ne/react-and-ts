export default function PreviewApp() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="mt-16 w-full rounded-lg border border-red-400 p-2 shadow-lg">
        <div className="h-[70vh] w-full rounded-md border border-yellow-400 bg-gray-200" />
      </div>

      <div className="from-background boder-red-400 pointer-events-none absolute inset-x-0 -bottom-0 h-1/3 border bg-gradient-to-t to-transparent lg:h-1/4" />
    </div>
  );
}
