import { Link } from "react-router-dom";
import { Product } from "../pages/Home";

interface Props {
  element: Product;
  key: Number;
}

export default function ProductCard({ element, key }: Props) {
  return (
    <li className="mt-2">
      <div className="bg-slate-50 p-2 rounded-md shadow-md">
        <div className="flex">
          <img
            src={element.image}
            alt={element.name}
            className="w-20 h-30 rounded-md"
          ></img>
          <div className="ml-2">
            <h1 className="font-semibold">{element.name}</h1>
            <p className="text-sm">{element.description}</p>
            <p>Rs. {JSON.stringify(element.price)}</p>
            <Link
              className="text-sm bg-yellow-500 rounded-md p-1 border border-blue-950 hover:bg-yellow-300"
              to={`${element.id}`}
            >
              Modify
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
