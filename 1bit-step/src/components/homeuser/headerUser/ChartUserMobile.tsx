import AchivimentUser from "./AchivimentUser";
import CalendarUser from "./CalendarUser";
import ChartExperience from "./ChartExperience";
import ChartYear from "./ChartYear";
import PixelArtCharacter from "./PixelArtCharacter";

export default function ChartUserMobile() {
  return (
    <div className="grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(3,_minmax(150px,_1fr))] gap-y-2">
      <div className="col-start-3 col-end-5 rounded-md p-4">
        <div className="border-border h-full w-full border max-w-[200px]">
          <ChartExperience />
        </div>
      </div>

      <div className="col-start-1 col-end-3 row-start-1 rounded-md p-4 ">
        <div className="border-border h-full w-full border ">
          <AchivimentUser />
        </div>
      </div>

      <div className="col-start-1 col-end-6 flex items-center justify-center ">
        <ChartYear />
      </div>

      <div className="col-start-1 col-end-5 row-start-3 p-4 max-w-[300px]">
        <CalendarUser />
      </div>


    </div>
  );
}
