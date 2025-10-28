import { useUser } from "../../../contexts/UserProvider";

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
  const { user } = useUser();
  const { week } = user;
  const daysOfWeek = Object.keys(week);
  const dayCheck = Object.values(week);
  return (
    <div className="border-border grid h-full w-full grid-cols-7 grid-rows-2 rounded-md border">
      {daysOfWeek.map((day, idx) => (
        <div
          className="border-border flex items-center justify-center border font-mono text-xs capitalize md:text-sm lg:text-base"
          key={idx}
        >
          {day}
        </div>
      ))}
      {dayCheck.map((c, idx) => (
        <div
          className="border-border flex items-center justify-center border font-mono text-xs md:text-sm lg:text-base"
          key={idx}
        >
          {c === true && "X"}
        </div>
      ))}
    </div>
  );
}
