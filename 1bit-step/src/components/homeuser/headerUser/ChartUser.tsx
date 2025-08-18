import ChartExperience from "./ChartExperience";
import ChartYear from "./ChartYear";

export default function ChartUser() {
  return (
    <div className="grid grid-cols-4 grid-rows-2">
      <div className="col-start-1 col-end-3 flex items-center justify-center p-4">
        <div className="border-border h-full w-full rounded-md border">
          <ChartExperience />
        </div>
      </div>

      <div className="col-start-3 col-end-5 flex items-center justify-center p-4">
        <div className="border-border h-full w-full rounded-md border">
          <ChartExperience />
        </div>
      </div>

      <div className="col-start-1 col-end-5 row-start-2 px-4">
        <div className="border-border flex h-full w-full items-center justify-center rounded-md border py-4">
          <ChartYear />
        </div>
      </div>
    </div>
  );
}
