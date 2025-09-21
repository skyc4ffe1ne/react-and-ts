import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { ArrowRight } from "../components/ui/icons";
import { Link } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  function handleEmail(e) {
    const emailUser = e.target.value;
    setEmail(emailUser)
  }

  function handlePassword(e) {
    const passwordUser = e.target.value;
    setPassword(passwordUser)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    try {
      const req = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      if (!req.ok) {
        throw new Error(`${req.status},${req.statusText}`)
      }

      const res = await req.json()
      console.log("Res:", res)

    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)

    }
  }

  return (
    <div className="grid h-screen grid-cols-1 place-items-center">
      <div className="grid grid-cols-1 gap-8 sm:min-w-md">
        <div className="flex items-start">LOGO</div>
        <form onSubmit={handleSubmit}>
          <div className="flex max-w-xl flex-col gap-2">
            <label
              htmlFor="email"
              className="text-secondary-foreground text-sm/5 font-medium"
            >
              Email
            </label>
            <Input type="text" id="email" onChange={(e) => handleEmail(e)} />

            <label
              htmlFor="password"
              className="text-secondary-foreground mt-4 text-sm/5 font-medium"
            >
              Password
            </label>
            <Input type="password" onChange={(e) => handlePassword(e)} />
          </div>

          <Button variant="primary" className="mt-10">
            {loading ? "Loading..." : "Sign In"}
          </Button>
          <p className="text-foreground mt-6 flex items-center gap-2 text-sm font-semibold">
            <span className="text-secondary-foreground text-sm">
              Don't have an account?
            </span>
            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              Sign Up
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
