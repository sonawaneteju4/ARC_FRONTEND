import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../component/Spinner";
import HandleError from "../component/HandleError";

const AddAddress = ({ cartId, userId, onClose }) => {
  const [loading, setloading] = useState(false);
  const [orderId, setorderId] = useState();
  let navigate = useNavigate();

  const [userAddress, setUserAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    addType: "default",
  });
  

  const HandleOnClose = ()=>{
    onClose();
  }

  const handleFormSubmit = async (e) => {
    console.log("api called")
    e.preventDefault();
    setloading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_API}/orders/placeorder`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("token"),
          },
          body: JSON.stringify({
            userId: userId,
            cartId: cartId,
            userAddress: userAddress,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const orderId = data._id;
        setorderId(orderId);
        navigate(`/order/${orderId}`);
        setloading(false);
        onClose();
      } else {
        alert("Some Thing Went Wrong Try Again later Or Enter Correct Details");
      }
    } catch (error) {
      console.error(error);
      alert("Something Went Wrong Plz Try Again" + error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white text-black rounded-xl w-96 py-2">
      {loading && <Spinner isOrderPage={true} />}
      <p className="text-center text-xl font-semibold py-2">Add Address</p>
      <hr />
      <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
        <div className="mx-4 py-1 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="line1"
          >
            Line1
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="line1"
            name="line1"
            type="text"
            placeholder="Line 1"
            value={userAddress.line1}
            onChange={handleInputChange}
          />
        </div>
        <div className="mx-4 py-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="line2"
          >
            Line2
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="line2"
            name="line2"
            type="text"
            placeholder="Line 2"
            value={userAddress.line2}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex">
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              name="city"
              placeholder="City"
              value={userAddress.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
              name="state"
              placeholder="State"
              value={userAddress.state}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex">
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pincode"
            >
              Pin Code
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pincode"
              type="text"
              name="pincode"
              placeholder="101010"
              value={userAddress.pincode}
              onChange={handleInputChange}
            />
          </div>
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              name="phone"
              placeholder="8080080808"
              value={userAddress.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="addType"
          >
            Address Type
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="addType"
              name="addType"
              value={userAddress.addType}
              onChange={handleInputChange}
            >
              <option value="default">Default</option>
              <option value="home">Home</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-black text-white px-2 py-2 mr-2 rounded-xl"
            type="submit"
            onClick={handleFormSubmit}
          >
            Place Order
          </button>
          <button
            className="bg-black text-white px-2 py-2 mr-2 rounded-xl"
            type="reset"
            onClick={HandleOnClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
