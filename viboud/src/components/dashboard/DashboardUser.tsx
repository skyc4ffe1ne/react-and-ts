import SongsList from "./SongsList";

export default function DashboardUser() {
  return (
    <div className="grid grid-cols-2 px-10 pt-12">
      <ul>
        <li> User1 </li>
        <li> User2</li>
        <li> User3</li>
      </ul>
      <SongsList />
    </div>
  );
}
