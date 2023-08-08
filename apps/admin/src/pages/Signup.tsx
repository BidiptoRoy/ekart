import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Signup() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-200 justify-center">
      <h1 className="text-2xl">Welcome Admin</h1>
      <div className="flex flex-col mt-10 items-center bg-stone-50 rounded-lg p-5 w-96">
        <h2 className="font-semibold">Sign Up</h2>
        <form className="flex flex-col space-y-4 p-4 w-80">
          <div className="flex">
            <label htmlFor="name" className="basis-28">
              Name
            </label>
            <input type="text" className="input grow" required />
          </div>
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
          <div className="flex">
            <label htmlFor="Password" className="basis-28">
              Re-enter Password
            </label>
            <input type="password" className="input my-3 grow" required />
          </div>
          <Button>Sign Up</Button>
        </form>
      </div>
      <div className="flex flex-col mt-5 bg-slate-50 rounded-lg items-center w-96 p-2">
        <h2 className="font-semibold">Already an Admin?</h2>
        <Link
          to="/signin"
          className=" text-blue-500 hover:text-blue-800 hover:underline"
        >
          Sign In Now
        </Link>
      </div>
    </div>
  );
}

export default Signup;
