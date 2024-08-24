import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="relative z-40 pb-[500px] bg-white">
      <div className="eb-garamond-font max-w-screen relative text-[#4e4e4e]">
        <div className="w-full absolute top-0 z-50">
          <NavBar />
        </div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
