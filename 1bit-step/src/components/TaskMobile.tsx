function Square(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}
export default function TaskMobile() {
  return (
    <div className="block md:hidden">
      <h2 className="pb-10 text-2xl"> Daily Task </h2>
      <ul className="">
        <li className="border-foreground border-b">
          <span className="font-mono text-sm/3">2 hours</span>
          <div className="flex justify-between items-center">
            <h3 className="overflow-hidden text-2xl text-nowrap text-ellipsis">
              Read a book
            </h3>

            <input type="checkbox" className="justify-self-start" />
          </div>

          <div className="border-foreground flex w-fit gap-1 border px-2 pt-1">
            <span className="font-mono text-sm/3"> Intelligence </span>
            <div className="grid size-2 place-content-center">
              <Square className="size-1 fill-black" />
            </div>
            <span className="font-mono text-sm/3">10xp</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
