import HeaderUser from "./homeuser/HeaderUser";
import TaskList from "./TaskList";
import TaskMobile from "./TaskMobile";

export default function HomeUser() {
  return (
    <main className="mt-10 px-4 md:mt-20 md:px-8">
      <div className="">
        <HeaderUser />

        <TaskList />
        <TaskMobile />
      </div>

    </main>
  );
}
