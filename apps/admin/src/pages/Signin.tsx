import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Signin() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-200 justify-center">
      <h1 className="text-2xl">Welcome Back Admin</h1>
      <div className="flex flex-col mt-10 items-center bg-stone-50 rounded-lg p-5 w-96">
        <h2 className="font-semibold">Sign In</h2>
        <form className="flex flex-col space-y-4 p-4 w-80">
          <div className="flex">
            <label htmlFor="email" className="basis-28">
              Email
            </label>
            <input type="email" className="input grow" required />
          </div>
          <div className="flex">
            <label htmlFor="Password" className="basis-28">
              Password
            </label>
            <input type="password" className="input grow" required />
          </div>
          <Button>Sign In</Button>
        </form>
      </div>
      <div className="flex flex-col mt-5 bg-slate-50 rounded-lg items-center w-96 p-2">
        <h2 className="font-semibold">No yet registered?</h2>
        <Link
          to="/signup"
          className=" text-blue-500 hover:text-blue-800 hover:underline"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
}

export default Signin;
