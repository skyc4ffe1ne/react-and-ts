import HeaderUser from "./homeuser/HeaderUser";
import TaskList from "./TaskList";

export default function HomeUser() {
  return (
    <main className="mt-20 px-8">
      <div className="">
        <HeaderUser />
        <TaskList />
      </div>
    </main>
  );
}
