import { useState } from "react"
import React  from 'react'

const InfoModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) {
        return null;
      }
    
      return (
        <div className="fixed inset-0 flex items-center  justify-center z-50 top-0 backdrop-sepia-0 bg-white/10 backdrop-blur-sm left-0 right-0 bottom-0 ">
          <div className="bg-gray-100 rounded-lg  p-10  ">
            <div className="mb-4 font-bold text-xl">{message}</div>
            <div className="flex justify-center">

            <button
              className="px-10 py-2  bg-black text-white rounded hover:bg-gray-600"
              onClick={onClose}
              >
              Close
            </button>
                </div>
          </div>
        </div>
      );
}

export default InfoModal