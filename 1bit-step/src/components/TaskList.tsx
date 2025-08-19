export default function TaskList() {
  return (
    <div className="hidden md:block">
      <h2 className="pb-10 text-4xl"> Daily Task </h2>
      <ul className="list-disc">
        <div className="grid grid-cols-[minmax(0,_150px)_minmax(0px,_1fr)_minmax(0px,_150px)_minmax(0px,_150px)_minmax(0px,_150px)] items-center">
          <div className="font-mono text-xs uppercase"> Time </div>
          <div className="font-mono text-xs uppercase"> Task </div>
          <div className="font-mono text-xs uppercase"> Reward </div>
          <div className="font-mono text-xs uppercase"> Type </div>
          <div className="font-mono text-xs uppercase"> Finish </div>
        </div>
        <li className="border-foreground grid items-center border-b md:grid-cols-[minmax(0,_150px)_minmax(0px,_1fr)_minmax(0px,_150px)_minmax(0px,_150px)_minmax(0px,_150px)]">
          <span className="font-mono"> 2 hours </span>
          <h3 className="overflow-hidden text-2xl text-nowrap text-ellipsis">
            Read a book
          </h3>
          <span className="font-mono"> 10xp </span>
          <span className="font-mono"> Intelligence </span>
          <input type="checkbox" className="justify-self-start" />
        </li>
      </ul>
    </div>
  );
}
