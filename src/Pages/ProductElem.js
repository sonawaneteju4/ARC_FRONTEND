import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper.js/FormatPrice";
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            10,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const ProductElem = (curElem) => {
  const {_id, name, image, price } = curElem;

  return (
    <Tilt options={defaultOptions}>
    {image ? (
  <NavLink to={`/productinfo/${_id}`} className="bg-white">
    <div style={{height: "400px"}} className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <ProductOffer /> */}
      <img
        className="w-full p-4 h-80 hover:contrast-50 transition-all ease-in-out delay-300"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-3 py-4">
        <div className="font-bold text-base mb-2 flex justify-between">
          <div>{name || "Ohh Nooo You Search Somthing Wrong "}</div>
          <div>
            <FormatPrice price={price}/>
          </div>
        </div>
      </div>
    </div>
  </NavLink>
) : (
  <div className="max-w rounded overflow-hidden shadow-lg opacity-90 cursor-not-allowed">
    <img
      className="w-full h-96"
      src="https://i.ibb.co/6rkfZ2R/Oh-Nooo-1.jpg"
      alt="Sunset in the mountains"
    />
    <div className="px-3 py-4">
      <div className="font-bold text-base mb-2 flex justify-between">
        <div>Ohh Nooo You Search Somthing Wrong?</div>
        <div>
          <FormatPrice price={69.69}/>
        </div>
      </div>
    </div>
  </div>
)}

    </Tilt>
  );
};

export default ProductElem;
