import React from "react";
import "../Pages/ordersucess.css";
import { FaVideo } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";

const OrderSuccess = () => {
  return (
    <div>
      <div class="card">
        <button class="dismiss" type="button">
          X
        </button>
        <div class="header">
          <div class="image">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20 7L9.00004 18L3.99994 13"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div class="content">
            <span class="title">Order Placed</span>
            <p class="message">
              Thank you for your purchase. you package will be delivered within
              3-7 days of your purchase
            </p>
          </div>
          <div class="actions">
            <button class="history" type="button">
              <span className="text-black pt-1 mx-2">
                <FaVideo />
              </span>
              How To Use / Apply
            </button>
            <button class="track" type="button">
              <span className="text-black pt-1 mx-2">
                <BiMapPin />
              </span>
              Track My Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
