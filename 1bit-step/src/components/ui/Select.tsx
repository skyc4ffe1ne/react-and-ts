// Make this accessible
import { useState } from "react";
import { useUser } from "../../contexts/UserProvider";
import { CherwonDown, Check } from "./Icons";

export default function Select() {
  const { user, activeYear, setActiveYear } = useUser();
  // const selectItems = Object.keys(statsYear);

  const userYears = Object.keys(user.year);
  const [showItems, setShowItems] = useState<boolean>(false);

  return (
    <div className="relative mr-8 flex cursor-pointer flex-col self-end">
      <header
        className="border-border flex h-8 min-w-24 items-center justify-between gap-2 rounded-md border px-2.5 py-2 text-sm"
        onClick={() => setShowItems(!showItems)}
      >
        {activeYear}
        <CherwonDown className="size-4" />
      </header>

      {showItems && (
        <ul
          className={`bg-background border-border absolute top-[26px] left-0 z-100 flex w-full flex-col gap-2 border px-1 py-2 ${showItems ? "border-t-0" : ""}`}
        >
          {userYears.map((year, idx) => (
            <li
              key={idx}
              className={`has-[svg]:years-center rounded-sm px-1.5 py-1 text-sm hover:bg-gray-100 has-[svg]:flex has-[svg]:justify-between ${activeYear === year ? "bg-gray-200" : ""}`}
              onClick={() => {
                setActiveYear(year);
                setShowItems(false);
              }}
            >
              {year}
              {activeYear === year && <Check className="size-4" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
