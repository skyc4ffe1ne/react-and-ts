import { CherwonDown } from "../../ui/Icons";
import PixelBlur from "../../ui/PixelBlur";
import AchivimentUser from "./AchivimentUser";
import CalendarUser from "./CalendarUser";
import ChartExperience from "./ChartExperience";
import ChartYear from "./ChartYear";

function ArrowRightUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
export default function ChartUser() {
  return (
    <div className="hidden grid-cols-4 grid-rows-2 sm:grid">
      <div className="col-start-1 col-end-3 flex items-center justify-center p-4">
        <div className="border-border relative h-full w-full overflow-hidden rounded-md border">
          <PixelBlur type="base-t-r" />
          <PixelBlur type="sm-b-l" />
          <ChartExperience />
        </div>
      </div>

      <div className="col-start-3 col-end-5 grid grid-cols-1 grid-rows-2 gap-y-2 py-2 md:p-4">
        <CalendarUser />
        <div className="border-border h-full w-full rounded-md border">
          <AchivimentUser />
        </div>
      </div>

      <div className="col-start-1 col-end-5 row-start-2 px-4">
        <div className="border-border relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md border py-4">


          <div className="border border-red-400  self-end mr-8 px-3 py-1 text-sm flex flex-col cursor-pointer">
            <header className="flex gap-2 items-center" >
              Hello?
              <CherwonDown className="size-4" />
            </header>

            <div className="">

            </div>
          </div>


          <PixelBlur type="xl-b-l" />

          <ChartYear />

          <div className="flex items-center gap-2 self-end pr-8">
            <h3 className="font-sans text-3xl font-light"> + 5.7% </h3>
            <div className="border-muted-foreground grid size-7 place-content-center rounded-full border">
              <ArrowRightUp className="stroke-muted-foreground size-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
