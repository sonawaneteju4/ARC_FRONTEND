import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ShowImg from "./ShowImg";
import AccordData from "./AccordData";
import OrderAccord from "./OrderAccord";
import Spinner from "../component/Spinner";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setisLoading] = useState(false);


  useEffect(() => {
    // Make the API call to fetch order history
    setisLoading(true);
    fetch(`${process.env.REACT_APP_BASE_API}/orders/orderhistory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the order history data in state
        setOrderHistory(data);
        setisLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="mt-16 min-h-screen">
      {isLoading && <Spinner />}
      <div className="text-center p-3">
        <h1 className="text-2xl font-bold ">Order History</h1>
      </div>
      <div className=" mx-40">
        <div className="m-10  my-2 justify-center  rounded-xl">
          {orderHistory.map((order) => (
            <>
              <OrderAccord
                key={order._id}
                oId={order._id}
                oderDate={order.createdAt}
                gTotal={order.total}
                status={order.status}
                items={order.items}
                address={order.address}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
