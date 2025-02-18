import JeansImg from "./assets/images/jeans.jpeg";
import ColorImg from "./assets/images/color.jpeg";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Woman from "./pages/Woman/Woman";
import Man from "./pages/Man/Man";
import AddProduct from "./pages/AddProduct/AddProduct";
import Login from "./pages/Login/Login";

export const products = [
  {
    images: [JeansImg, ColorImg, JeansImg],
    title: "Red Top",
    price: 500,
  },
  {
    images: [JeansImg, ColorImg, JeansImg],
    title: "Blue Dress",
    price: 700,
  },
  {
    images: [JeansImg, ColorImg, JeansImg, ColorImg],
    title: "Green Jacket",
    price: 1200,
  },
  {
    images: [JeansImg],
    title: "White Blouse",
    price: 600,
  },
  {
    images: [JeansImg, JeansImg],
    title: "Black Skirt",
    price: 800,
  },
];

const App = () => {
  console.log("here in app");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </>
  );
};

export default App;