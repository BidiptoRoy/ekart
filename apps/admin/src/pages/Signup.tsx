import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import axios from "axios";
import { userIsLoadingState } from "../store/selectors/userDetails";
import Loader from "../ui/Loader";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const isUserLoading = useRecoilValue(userIsLoadingState);

  const handleSubmit = async function (e: any) {
    e.preventDefault();
    try {
      setUser({
        isLoading: true,
        userEmail: "",
      });
      const res = await axios.post("http://localhost:5001/admin/signup", {
        name,
        email,
        password,
        passwordConfirm: confirmPass,
      });
      console.log(res.data);
      setUser({
        isLoading: false,
        userEmail: email,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: "",
      });
    }
  };

  return (
    <>
      {isUserLoading && <Loader />}
      <div className="flex h-screen flex-col items-center bg-slate-200 justify-center">
        <h1 className="text-2xl">Welcome Admin</h1>
        <div className="flex flex-col mt-10 items-center bg-stone-50 rounded-lg p-5 w-96">
          <h2 className="font-semibold">Sign Up</h2>
          <form className="flex flex-col space-y-4 p-4 w-80">
            <div className="flex">
              <label htmlFor="name" className="basis-28">
                Name
              </label>
              <input
                type="text"
                className="input grow"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex">
              <label htmlFor="email" className="basis-28">
                Email
              </label>
              <input
                type="email"
                className="input grow"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex">
              <label htmlFor="Password" className="basis-28">
                Password
              </label>
              <input
                type="password"
                className="input grow"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex">
              <label htmlFor="Password" className="basis-28">
                Re-enter Password
              </label>
              <input
                type="password"
                className="input my-3 grow"
                required
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-yellow-500 py-1 rounded-lg border-blue-950 border hover:bg-yellow-600 font-semibold w-20"
            >
              Sign Up
            </button>
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
    </>
  );
}

export default Signup;
