import React, { useEffect, useState } from "react";

// const API = "http://localhost:5000/api/userAddress/getUserAddress"
const UserAddress = () => {
  const [showAddress, setshowAddress] = useState(false);

  return (
    <div>
      <div className="flex justify-between p-2 border-2 rounded">
        <div className="font-normal">
          <p>
            Deliver to: <span className="font-semibold">Name of User, </span>{" "}
            <span className="font-semibold">424304</span>
          </p>
          <p className="font-thin text-base">Full Address is Here......... </p>
        </div>
        <div className="flex items-center">
          <button
            className=" bg-black text-white rounded-xl px-2 py-1 text-base"
            onClick={() => setshowAddress(true)}
          >
            Change Address
          </button>
        </div>
      </div>
      {showAddress ? (
        <div>
          <div
            className="fixed top-20 backdrop-sepia-0 bg-black/50 backdrop-blur-sm left-0 right-0 bottom-0 z-50 flex items-center justify-center cursor-pointer"
            onClick={() => setshowAddress(false)}
          >
            <div className="bg-white w-96 rounded">
              <div className="p-2 ">
                <div className="font-normal">
                  <p>
                    Deliver to:{" "}
                    <span className="font-semibold">Name of User, </span>{" "}
                    <span className="font-semibold">424304</span>
                  </p>
                  <p className="font-thin text-base">
                    Full Address is Here.........{" "}
                  </p>
                </div>
                  <hr></hr>
                <div className="font-normal">
                  <p>
                    Deliver to:{" "}
                    <span className="font-semibold">Name of User, </span>{" "}
                    <span className="font-semibold">424304</span>
                  </p>
                  <p className="font-thin text-base">
                    Full Address is Here.........{" "}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserAddress;
