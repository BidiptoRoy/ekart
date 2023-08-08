import AppBar from "../ui/AppBar";
import Button from "../ui/Button";

export default function AddNewProduct() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <AppBar />
      <h1 className="text-xl mb-10 ">Create New Product</h1>

      <div className="flex flex-col w-[32rem] bg-white mx-auto items-center justify-between space-y-4 p-2 rounded-xl">
        <div className="flex justify-around w-96">
          <label htmlFor="name" className="basis-28">
            Item Name
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex justify-around w-96">
          <label className="basis-28" htmlFor="description">
            Description
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex justify-around w-96">
          <label htmlFor="image" className="basis-28">
            Image Link
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex justify-around w-96">
          <label htmlFor="price" className="basis-28">
            Item Price
          </label>
          <input type="text" className="input" />
        </div>
        <Button>Create</Button>
      </div>
    </div>
  );
}
