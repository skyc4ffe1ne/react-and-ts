const date = new Date();
export default function Footer() {
  return (
    <footer className="flex justify-between w-full h-20 items-center px-4">
      <p className="text-base text-black/60"> &copy; {date.getFullYear()} JobTrack </p>

      <div className="flex gap-4 items-center justify-center">
        <button> github</button>
      </div>
    </footer>
  );
}
