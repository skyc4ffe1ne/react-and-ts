import { Outlet } from "react-router";
import PreviewCurriculum from "./PreviewCurriculum";

function ArrowRightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#1f1f1f"
      {...props}
    >
      <path d="M683.15-460H200v-40h483.15L451.46-731.69 480-760l280 280-280 280-28.54-28.31L683.15-460Z" />
    </svg>
  );
}
export default function AppLayout({ state }) {
  return (
    <main className="mt-20 flex h-full w-full justify-center gap-20">
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <PreviewCurriculum state={state} />
      </div>
    </main>
  );
}
