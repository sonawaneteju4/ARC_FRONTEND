import React from 'react'

const ModalImg = ({image, onClick}) => {
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
                  <img
                    src={image}
                    alt="modal"
                    className="h-full ml-auto mr-auto"
                  />
                </div>
              </div>
            </div>
    </div>
  )
}

export default ModalImg