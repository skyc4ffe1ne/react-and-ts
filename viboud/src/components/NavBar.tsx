import Button from "./ui/Button";
export default function NavBar() {
  return (
    <header className="sticky inset-0 top-0 left-0 flex h-14 w-full items-center justify-between px-4">
      <div className="">LOGO</div>

      <nav>
        <ul>
          <li> How it Works </li>
        </ul>
      </nav>

      <div className="flex gap-2">
        <Button variant="secondary"> Login </Button>
        <Button variant="primary"> SignUp </Button>
      </div>
    </header>
  );
}
