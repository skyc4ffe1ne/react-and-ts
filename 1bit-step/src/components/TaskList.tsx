export default function TaskList() {
  return (
    <div className="">
      <h2 className="pb-10 text-4xl"> Daily Task </h2>
      <ul className="list-disc">
        <div className="grid grid-cols-[250px_minmax(0px,1fr)_250px_250px_250px] items-center">
          <div className="font-mono text-xs uppercase"> Time </div>
          <div className="font-mono text-xs uppercase"> Task </div>
          <div className="font-mono text-xs uppercase"> Reward </div>
          <div className="font-mono text-xs uppercase"> Type </div>
          <div className="font-mono text-xs uppercase"> Finish </div>
        </div>
        <li className="border-foreground grid grid-cols-[250px_minmax(0px,1fr)_250px_250px_250px] items-center border-b">
          <span className="font-mono"> 2 hours </span>
          <h3 className="text-2xl"> Read a book </h3>
          <span className="font-mono"> 10xp </span>
          <span className="font-mono"> Intelligence </span>
          <input type="checkbox" className="justify-self-start" />
        </li>
      </ul>
    </div>
  );
}
