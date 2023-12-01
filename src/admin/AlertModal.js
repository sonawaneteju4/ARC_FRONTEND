import React from "react";

const AlertModal = ({ onClick, color, modalMessage }) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 backdrop-sepia-0 bg-white/10 backdrop-blur-sm bottom-0 z-50 flex items-center justify-center cursor-zoom-out"
        onClick={onClick}
      >
        <button
          className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-900 opacity-50 blur-sm"
          onClick={onClick}
        ></button>
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex justify-end p-2">
              <button
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={onClick}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Close</title>
                  <path
                    fillRule="evenodd"
                    d="M14.348 5.652a.5.5 0 0 1 0 .708L10.708 10l3.64 3.64a.5.5 0 0 1-.708.708L10 10.708l-3.64 3.64a.5.5 0 0 1-.708-.708L9.292 10 5.652 6.36a.5.5 0 0 1 .708-.708L10 9.292l3.64-3.64a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">{color === "blue" ? "Success" : "Error"}</h2>
              <p>{modalMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
