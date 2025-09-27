import SongsList from "./SongsList";
import UserList from "./UserList";
export default function DashboardUser() {
  return (
    <div className="grid h-fit grid-cols-[minmax(0,_400px)_minmax(0,_650px)_minmax(0,_275px)] grid-rows-[250px_250px] gap-x-4 px-10 pt-12">
      <div>

      </div>
      <SongsList />

      <UserList />
    </div>
  );
}
