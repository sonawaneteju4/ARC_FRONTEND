import React from "react";
import "./Spinner.css";
// import loading from './Gear.gif'

const Spinner = ({isHomePage = false, isAdminPage = false,isOrderPage = false}) => {
  return (
    <>
    <div className="spinner scroll-lock">
      <div className="loader">
        <div className="loader-square color1"></div>
        <div className="loader-square color2"></div>
        <div className="loader-square color3"></div>
        <div className="loader-square color4"></div>
        <div className="loader-square color5"></div>
        <div className="loader-square color6"></div>
        <div className="loader-square color7"></div>
      </div>
      <p className="m-5 text-3xl ml-16" style={{fontWeight:"bold"}} >
      {
  isHomePage ? "Welcome to AR CUSTOMS" : isAdminPage ? "Welcome Admin | AR CUSTOMS" : isOrderPage ?  "Order Confirming..." :"AR CUSTOMS"
}
        </p>    </div>
    </>
  );
};

export default Spinner;
