import React, { useEffect, useState } from "react";

const ShowImg = ({ productId, price, quantity }) => {
  const [product, setproduct] = useState();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_API}/product/fetchproduct?_id=${productId}`,
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
        setproduct(data);
      } catch (error) {
        console.error(error);
        // Handle error state
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <>
      {product && (
        <>
          <div key={product._id} className="w-40 text-center">
            <img
              className="h-32 w-36 mr-auto ml-auto px-2 pb-2 rounded-2xl"
              src={product.image}
              alt={product.name}
            />
            <small className="text-base font-semibold">{product.name}</small>
            <div className="text-sm">
              <samll>Quantity: {quantity}</samll>{" "}{" "}
              <small>Price: {price}</small>
            </div>
            <div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowImg;
