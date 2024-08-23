import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="eb-garamond-font max-w-screen relative text-[#4e4e4e]">
      <div className="w-full absolute top-0">
        <NavBar />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
