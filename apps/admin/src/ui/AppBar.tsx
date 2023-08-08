import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <div className="bg-blue-700 text-white font-semibold p-2 flex justify-between fixed top-0 w-full">
      <Link to="/home" className="p-1 text-xl">
        🛒 Ekart
      </Link>
      <input
        className="w-72 md:w-96 rounded-full bg-stone-100 text-stone-800 focus:outline-none focus:ring focus:ring-blue-800 px-2 py-1"
        placeholder="🔍 Search your product"
      ></input>
      <button className="bg-blue-600 rounded-full p-2 hover:bg-blue-400">
        Logout
      </button>
    </div>
  );
}
