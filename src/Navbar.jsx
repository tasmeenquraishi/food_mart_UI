import React from "react";
import { Link } from "react-router-dom";
import App from "./App";

const Navbar = () => {
    return (
        <nav className="bg-lime-700 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">FoodCart</Link>
        </div>
        
        <div className="flex space-x-8">
          <Link to="/" className="hover:text-black font-semibold"> Home </Link>

          <Link to="/products" className="hover:text-black font-semibold"> Products </Link>

          <Link to="/addseller" className="hover:text-black font-semibold"> Add Seller </Link>
          
          <Link to="/login" className="hover:text-black font-semibold"> Login </Link>
        </div>
      </div>
        </nav>
    )
}

export default Navbar;