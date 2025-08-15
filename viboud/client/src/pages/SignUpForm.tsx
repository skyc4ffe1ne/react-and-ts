import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { ArrowRight } from "../components/ui/icons";
import { Link } from "react-router";

export default function SignUpForm() {
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // TODO: Zod
  function handleEmail(e) {
    const emailUser = e.target.value;
    setEmail(emailUser)
  }
  function handlePassword(e) {
    const passwordUser = e.target.value;
    setPassword(passwordUser)
  }
  function handleUsername(e) {
    const usernameUser = e.target.value;
    setUsername(usernameUser)
  }


  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const req = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      })
      if (!req.ok) {
        setError("Something went wrong!")
        throw new Error(`${req.status} ${req.statusText}`);
      }

      const res = await req.json();
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="grid h-screen grid-cols-1 place-items-center">
      <div className="grid grid-cols-1 gap-8 sm:min-w-md">
        <Link to="/" className="flex items-start">LOGO</Link>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex max-w-xl flex-col gap-2">
            <label
              htmlFor="email"
              className="text-secondary-foreground text-sm/5 font-medium"
            >
              Email
            </label>
            <Input type="email" id="email" onChange={(e) => handleEmail(e)} />

            <label
              htmlFor="username"
              className="text-secondary-foreground mt-4 text-sm/5 font-medium"
            >
              Username
            </label>
            <Input
              type="text"
              id="username"
              onChange={(e) => handleUsername(e)}
            />

            <label
              htmlFor="password"
              className="text-secondary-foreground mt-4 text-sm/5 font-medium"
            >
              Password
            </label>
            <Input type="password" onChange={(e) => handlePassword(e)} />
          </div>

          <Button variant="primary" className="mt-10"

          >
            {loading ? "loading" : "Sign Up"}
          </Button>
          <p className="text-foreground mt-6 flex items-center gap-2 text-sm font-semibold">
            <span className="text-secondary-foreground text-sm">
              Arleady have an account?
            </span>
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              Sign In
              <span>
                <ArrowRight className="stroke-foreground size-4" />
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
