export default function Input({ type, ...other }) {
  return (

    <div className="">
      <input
        type={type}
        className="bg-background outline-border foucs:ring-2 focus:ring-foreground h-10 w-full rounded-lg px-3 text-base shadow-sm outline -outline-offset-1 focus:ring"
        {...other}
      />
    </div>
  );
}
