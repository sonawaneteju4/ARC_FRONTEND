import React from 'react'
import { Carousel } from "react-responsive-carousel";

const Carsoul = () => {
  return (
    <div> <div className="p-2">
    <Carousel showArrows={true} slideInterval={5000}>
      <div className="">
        <img src="/image/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/image/helmet.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/image/1.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="/image/helmet.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="/image/1.jpeg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="/image/1.jpeg" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  </div>
</div>
  )
}

export default Carsoul