import { Link, useNavigate } from "react-router-dom";
import AppBar from "../ui/AppBar";
import ProductCard from "../ui/ProductCard";
import { useRecoilValue } from "recoil";
import {
  userEmailState,
  userIsLoadingState,
} from "../store/selectors/userDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../ui/Loader";

export interface Product {
  name: string;
  description: string;
  image: string;
  price: Number;
  _id: number;
}

function Home() {
  const userEmail = useRecoilValue(userEmailState);
  const isUserLoading = useRecoilValue(userIsLoadingState);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      if (userEmail === "null" && isUserLoading === false) navigate("/signin");
    },
    [userEmail, isUserLoading, navigate]
  );

  useEffect(function () {
    const getProducts = async function () {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.get("http://localhost:5001/admin/home", {
        headers,
      });
      setProducts(res.data.data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="bg-slate-200 h-screen">
        <AppBar />
        <div className="flex flex-col mt-20">
          <Link
            to="/addNewProduct"
            className="rounded bg-stone-400 p-2 mt-2 ml-2 w-48 font-semibold"
          >
            &#10133; Add New Product
          </Link>
          <div className=" w-[32rem] mx-auto px-5">
            <h2 className="text-xl font-semibold mt-4">Your products</h2>
            <ul className="my-2">
              {products.map((el: Product) => (
                <ProductCard element={el} key={el._id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
