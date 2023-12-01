import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormatPrice from "../helper.js/FormatPrice";
import OrderProducts from "./OrderProducts";

const Order = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  let navigate = useNavigate();


  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    }
  },);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_API}/orders/order/${orderId}`,
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": sessionStorage.getItem("token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch order details");
        }
        
        const data = await response.json();
        console.log(data);
        console.log(data.status);
        setOrder(data);
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <div className="mt-16 max-h-max mb-5 bg-white">
      <h2 className="pl-5 bg-slate-500 h-10 w-screen pt-2 text-white">
        Order Details
      </h2>
      <div className="h-60 pt-10 text-center">
        <div>
          <img
            className="h-40 mt-auto mr-auto ml-auto mb-auto"
            src="/image/check.gif"
            alt=""
          ></img>
        </div>
        <div className="font-extrabold text-3xl">Order Placed</div>
      </div>

      {order ? (
        <div className="" key={order._id}>
          <p className="pt-5 text-center">
            <span className="font-extrabold">Order ID : </span>

            {order._id.slice(-10)}          </p>
          <p className=" text-center">
            <span className="font-extrabold"></span>
            { new Date(order.createdAt).toLocaleString()}
          </p>
          <div className="text-center text-sky-500">
          <Link  to="/orderhistory">Order History</Link>

          </div>
          <div className="">
            <hr />
            <div className="px-32 pt-5 pb-5 ">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-row odd:bg-slate-100/50 even:bg-slate-200/50 pt-2"
                >
                  <OrderProducts
                    productId={item.productId}
                    price={item.price}
                    quantity={item.quantity}
                    brand={item.brand}
                    device={item.device}
                    total={item.price * item.quantity}
                  />
                
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="mx-32 flex justify-between  mt-5">
            <div className="">
              <h3>
                <span className="font-extrabold">
                  Shipping Address: {/* Render shipping address details */}
                </span><br />
                {order.address.line1} {order.address.line2}
                <br></br> {order.address.city} {order.address.state}
                <br /> {order.address.pincode}{" "}
              </h3>
            </div>

            <div className="">
              <p className="pb-1">
                <span className="font-extrabold">Contact No : </span>
                {order.address.phone}
              </p>
              <h3 className="pb-1">
                <span className="font-extrabold">Payment Details: </span>
                Ofline
              </h3>
              {/* Render payment details */}
              <p className="pb-1">
                <span className="font-extrabold">Order status:</span>{" "}
                {order.status}
              </p>
              <p className="pb-1">
                <span className="font-extrabold">Shipping Charges: </span>
                <FormatPrice price={order.shippingCharges} />
              </p>
              <p className="pb-1">
                <span className="font-extrabold underline underline-offset-2">
                  Grand Total:{"   "}<FormatPrice price={order.total} />
                </span>
              </p>
              {/* Render other payment details */}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default Order;
