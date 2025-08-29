const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const checkDay = [
  {
    day: 1,
    check: true,
  },
  {
    day: 2,
    check: false,
  },
  {
    day: 3,
    check: true,
  },
  {
    day: 4,
    check: true,
  },
  {
    day: 5,
    check: false,
  },
  {
    day: 6,
    check: false,
  },
  ,
  {
    day: 7,
    check: false,
  },
];
export default function CalendarUser() {
  return (
    <div className="border-border grid h-full w-full grid-cols-7 grid-rows-2 rounded-md border">
      {daysOfWeek.map((day, idx) => (
        <div
          className="border-border flex items-center justify-center border font-mono text-xs md:text-sm lg:text-base"
          key={idx}
        >
          {day}
        </div>
      ))}
      {checkDay.map((c, idx) => (
        <div
          className="border-border flex items-center justify-center border font-mono text-xs md:text-sm lg:text-base"
          key={idx}
        >
          {c.check && "X"}
        </div>
      ))}
    </div>
  );
}
