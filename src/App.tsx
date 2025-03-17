// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
//import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import AboutUs from "./components/AboutUs";


function App() {

  return (
    <div className="min-h-screen bg-gray-900">
    {/* <Navbar /> */}
    <Hero />
    <AboutUs />
    <ProductCard />
  
  </div>
  )
}

export default App
