import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import UpdateProduct from "./pages/UpdateProduct";
import AddNewProduct from "./pages/AddNewProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="signin" />}></Route>
        <Route path="signin" element={<Signin />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="home/:productId" element={<UpdateProduct />}></Route>
        <Route path="addNewProduct" element={<AddNewProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
