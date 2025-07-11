import { Outlet } from "react-router";
import PreviewCurriculum from "./PreviewCurriculum";
import type { State } from "../lib/types"

export default function AppLayout({ state }: { state: State }) {
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
