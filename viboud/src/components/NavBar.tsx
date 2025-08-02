import Button from "./ui/Button";
export default function NavBar() {
  return (
    <header className="fixed inset-0 top-0 left-0 z-50 flex h-14 w-full items-center justify-between px-4 backdrop-blur-md">
      <div className="flex-1">LOGO</div>

      <nav className="flex flex-1 justify-center text-sm/6">
        <ul>
          <li className="cursor-pointer"> How it Works </li>
        </ul>
      </nav>

      <div className="flex flex-1 justify-end gap-2">
        <Button variant="ghost"> Login </Button>
        <Button variant="primary"> SignUp </Button>
      </div>
    </header>
  );
}
