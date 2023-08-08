import { Link } from "react-router-dom";
import AppBar from "../ui/AppBar";
import ProductCard from "../ui/ProductCard";

export interface Product {
  name: string;
  description: string;
  image: string;
  price: Number;
  id: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Icecream",
    description: "Cool and sweet for the people who are sweet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    price: 99,
  },
  {
    id: 2,
    name: "Icecream",
    description: "Cool and sweet for the people who are sweet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    price: 99,
  },
  {
    id: 3,
    name: "Icecream",
    description: "Cool and sweet for the people who are sweet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    price: 99,
  },
  {
    id: 4,
    name: "Icecream",
    description: "Cool and sweet for the people who are sweet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    price: 99,
  },
  {
    id: 5,
    name: "Icecream",
    description: "Cool and sweet for the people who are sweet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    price: 99,
  },
];

function Home() {
  return (
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
          <ul>
            {products.map((el) => (
              <ProductCard element={el} key={el.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
