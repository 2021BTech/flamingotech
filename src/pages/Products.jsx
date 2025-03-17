import React from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  const products = [
    {
      name: "Car Wax",
      image: "car-wax.jpg",
      code: "F043",
      description: "Premium car wax for a shiny finish.",
    },
    // Add more products here
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;