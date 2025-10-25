import { KingPxl, FirePxl, StarPxl } from "../../ui/Icons";

const archiviments = [
  <KingPxl className="size-5" />,
  <FirePxl className="size-5" />,
  <StarPxl className="size-5" />,
];
export default function AchivimentUser() {
  return (
    <div className="p-2 sm:p-4">
      <h4 className="font-mono text-base sm:text-lg"> Achiviment </h4>
      <div className="ml-4 flex items-center">
        {archiviments.map((a, idx) => (
          <div
            key={idx}
            className="-ml-3 grid size-8 place-content-center rounded-full bg-gray-200"
          >
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}
