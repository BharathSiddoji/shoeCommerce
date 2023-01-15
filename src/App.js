import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./navigation/Nav";
import "./App.css";
import { createContext, useState } from "react";
import Home from './components/home/Home';
import About from './components/about/About';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';

export const dataContext = createContext();

const assetsData = [
  {
    id: 1,
    image: "./assets/p(1).svg",
    title: "Black-White Sneakers",
    price: 89,
    discription:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    image: "./assets/p(2).svg",
    title: "Red HighTop Sneakers",
    price: 99,
    discription:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    image: "./assets/p(3).svg",
    title: "Chunky Sneakers",
    price: 70,
    discription:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    image: "./assets/p(4).svg",
    title: "Red Sneakers",
    price: 60,
    discription:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    image: "./assets/p(5).svg",
    title: "Black Altleasure",
    price: 75,
    discription:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 6,
    image: "./assets/p(6).svg",
    title: "Color Block red",
    price: 89,
    discription:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 7,
    image: "./assets/p(7).svg",
    title: "Orange Altleasure",
    price: 90,
    discription:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
  },
];

function App() {
  const [data] = useState(assetsData);
  const [cart, setCart] = useState("");
  // console.log(data);
  return (
    <dataContext.Provider value={{ data, setCart, cart }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home className="home" />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
