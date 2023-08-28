import { useState } from "react";
import AppBar from "../ui/AppBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNewProduct() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async function (e: any) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.post(
        "http://localhost:5001/admin/home/product",
        {
          name: itemName,
          description,
          price: Number(price),
          image,
        },
        { headers }
      );
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <AppBar />
      <h1 className="text-xl mb-10 ">Create New Product</h1>

      <div className="flex flex-col w-[32rem] bg-white mx-auto items-center justify-between space-y-4 p-2 rounded-xl">
        <div className="flex justify-around w-96">
          <label htmlFor="name" className="basis-28">
            Item Name
          </label>
          <input
            type="text"
            className="input"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="flex justify-around w-96">
          <label className="basis-28" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-around w-96">
          <label htmlFor="image" className="basis-28">
            Image Link
          </label>
          <input
            type="text"
            className="input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex justify-around w-96">
          <label htmlFor="price" className="basis-28">
            Item Price
          </label>
          <input
            type="text"
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="bg-yellow-500 py-1 rounded-lg border-blue-950 border hover:bg-yellow-600 font-semibold w-20"
        >
          Create
        </button>
      </div>
    </div>
  );
}
