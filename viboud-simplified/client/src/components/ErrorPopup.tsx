import { TriangleAlert } from "./ui/icons.tsx";
export default function ErrorPopup({
  error,
  setError,
}: {
  error: string;
  setError: (s: string | null) => void;
}) {
  return (
    <div className="bg-background fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-4 shadow-sm">
      <header className="justify-left flex items-end gap-1">
        <TriangleAlert className="stroke-background size-8 fill-red-400" />
        <h3 className="font-mono text-sm/6 font-medium tracking-widest uppercase">
          {" "}
          Error{" "}
        </h3>
      </header>
      <h3 className="pt-4 text-lg/7 text-red-500"> {error} </h3>
      <button
        className="bg-foreground text-background hcursor-pointer mt-8 w-fit cursor-pointer rounded-md px-4 py-2 text-sm font-medium"
        onClick={() => setError(null)}
      >
        Dismiss
      </button>
    </div>
  );
}
