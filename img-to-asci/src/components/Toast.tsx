export default function Toast({ type }: { type: "error" }) {
  const style = {
    error: "bg-red-400/20 text-red-700",
    default: "bg-background text-foreground",
    warning: "bg-yellow-400/20 text-yellow-700",
  };

  return (
    <div
      className={`border-border ease fixed right-2 bottom-2 rounded-md border ease-out px-4 py-2 shadow-lg transition-all duration-[400ms] starting:-right-40 ${style[type]}`}
    >
      <h3 className="text-sm font-semibold">Something went wrong</h3>
      <p className="text-foreground text-sm font-medium opacity-90">
        Please try again!
      </p>
    </div>
  );
}
