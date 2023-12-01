import React from 'react'
import { useState } from 'react'

const HandleError = ({ message, onClose }) => {
    const [showAlert, setShowAlert] = useState(true);
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-4 top-16 bg-red-500 text-white ${
        showAlert ? 'block' : 'hidden'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>{message}</div>
          <button
            className="ml-4 text-white font-bold"
            onClick={() => {
              setShowAlert(false);
              onClose();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default HandleError