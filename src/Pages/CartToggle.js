import React from "react";

const CartToggle = ({  quantity, stock, onIncrease, onDecrease }) => { 
  
  return (
    <div>
      <div className="mr-3">
        <div>
          <button
      
           style={{
            backgroundColor: `${quantity > 1 ? "#050505" : "#808080"}`,
          }}
            className="py-2 text-lg px-4  rounded-l-lg bg-black text-white cursor-pointer"
            onClick={onDecrease}
          >
            -
          </button>
          <button className="py-2 text-lg px-4 bg-gray-900 text-white cursor-not-allowed">
            {stock == 0 ? "0" :quantity}
          </button>
          <button
            disabled={quantity == stock}
            style={{
              backgroundColor: `${stock > quantity ? "#050505" : "#808080"}`,
            }}
            className="py-2 text-lg px-4 rounded-r-lg bg-black text-white cursor-pointer"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartToggle;
