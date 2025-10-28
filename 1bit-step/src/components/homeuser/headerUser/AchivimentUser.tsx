import { KingPxl, FirePxl, StarPxl } from "../../ui/Icons";

const achievements = [
  <KingPxl className="size-6" />,
  <FirePxl className="size-6" />,
  <StarPxl className="size-6" />,
];
export default function AchivimentUser() {
  return (
    <div className="p-2 sm:p-4">
      <h4 className="cursor-pointer font-mono text-base hover:underline">
        Achievements
      </h4>
      <div className="ml-4 flex items-center">
        {achievements.map((a, idx) => (
          <div
            key={idx}
            className="-ml-4 grid size-10 place-content-center rounded-full bg-black/5 backdrop-blur-2xl"
          >
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}
