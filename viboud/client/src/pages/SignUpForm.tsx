import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { ArrowRight } from "../components/ui/icons";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useSession } from "../contexts/SessionProvider";
import { LogoViboud } from "../components/ui/LogoViboud";


export default function SignUpForm() {
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setSession } = useSession()
  const navigate = useNavigate();

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
      const req = await fetch("http://localhost:3000/api/auth/signup/", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      })

      if (!req.ok) {
        throw new Error(`${req.status} ${req.statusText}`);
      }


      const res = await req.json();
      console.log("res:", res)

      if (res.status === 404) {
        throw new Error(res.message ?? "Something went wrong!")
      }

      setSession(res.data)
      navigate('/dashboard')

    } catch (err) {
      setError(err.message ?? "Something went wrong!")
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="grid h-screen grid-cols-1 place-items-center">
      <div className="grid grid-cols-1 gap-8 sm:min-w-md">
        <Link to="/" className="flex items-start">
          <LogoViboud className="fill-foreground flex items-start" />
        </Link>
        {error && <p className="text-destructive text-sm/6 font-semibold"> {error} </p>}
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

          <Button variant="primary" className="mt-10">
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
