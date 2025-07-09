import { Outlet } from "react-router";
import PreviewCurriculum from "./PreviewCurriculum";

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
