import React from "react";

import { useState, useEffect } from "react";

import { FiShoppingCart } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import LoginComp from "../component/LoginComp";
// Define the addToCart function

// AddToCart component
  const AddToCart = ({stock, handleAddToCart }) => {
    const addToCart = () => {
      if (sessionStorage.getItem("token")) {
        handleAddToCart();
      } else {
        // show login component or alert the user to log in
      }
    };
  
  return (
    <div>
      <>
        <button
          disabled={stock === 0}
          style={{
            backgroundColor: `${stock > 0 ? "#050505" : "#808080"}`,
          }}
          className="flex items-center  text-white hover:bg-slate-900 rounded-3xl px-5 p-3"
          to="#"
          onClick={handleAddToCart}
        >
          <span className="px-2">
            <FiShoppingCart />
          </span>
          {stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </>
    </div>
  );
};

export default AddToCart;
