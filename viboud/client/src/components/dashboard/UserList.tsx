const users = [
  {
    name: "bob",
    online: true,
    role: "Owner",
  },
  {
    name: "alice",
    online: true,
  },
  {
    name: "tom",
    online: false,
  },
  {
    name: "jerry",
    online: false,
  },
  {
    name: "someone",
    online: true,
  },
];

export default function UserList() {
  return (
    <div className="border-border relative row-span-2 h-full w-full overflow-y-scroll rounded-xl border p-4">
      <ul className="">
        {users.map(({ name, online, role }, idx) => (
          <li key={idx} className="flex items-center gap-2 not-first:mt-4">
            <div className="relative size-8 rounded-full bg-linear-90 from-blue-200 to-purple-200">
              {online && (
                <>
                  <div className="absolute right-0 bottom-0 size-3.5 rounded-full bg-white" />
                  <div className="absolute right-0.5 bottom-0.5 size-2.5 rounded-full bg-green-400" />
                </>
              )}
            </div>
            <div className="">
              <p className="text-foreground text-base/4">{name}</p>
              <p className="text-secondary-foreground text-sm/5">
                {role ? role : ""}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="from-background gradient-b sticky bottom-0 left-0 h-32 w-full bg-linear-to-t from-20% to-transparent" />
    </div>
  );
}
