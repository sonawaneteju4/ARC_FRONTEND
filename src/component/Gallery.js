import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import Spinner from "../component/Spinner";
import ModalImg from '../Pages/ModalImg'
import InstaEmb from "./InstaEmb";

const API = `${process.env.REACT_APP_BASE_API}/gallery/getimages`;
const Gallery = () => {
  const [gallery, setgallery] = useState([]);
  const [loading, setloading] = useState(false);
  const [showMoadl, setshowMoadl] = useState();

  const fetchApiData = async (url) => {
    try {
      setloading(true);
      const res = await fetch(url);
      const data = await res.json();
      setgallery(data);
      setloading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div className="text-black mt-16  bg-slate-600">
      <div className="text-center hidden p-3 bg-gray-200">
        <ButtonGroup variant="text" size="small" aria-label="text button group">
          <Button className="m-2">Car Wrap</Button>
          <Button className="m-2">Bike Wrap</Button>
          <Button className="m-2">Detailing</Button>
          <Button className="m-2">Paint Protection Film</Button>
          <Button className="m-2">Mobile | Laptop Wrap</Button>
          <Button className="m-2">All</Button>
        </ButtonGroup>
      </div>
      {loading && <Spinner />}
      <>
      <InstaEmb/>
      </>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-5 items-center">
        {gallery.map((items) => (
          <div className="m-2" key={items._id}>
            <img
              src={items.link}
              alt={items.title}
              className=" rounded hover:contrast-50"
              onClick={() => setshowMoadl(true)}
            ></img>
          <div>
          {showMoadl ? (
         <>
           <ModalImg key={items.link} image={items.link}  onClick={() => setshowMoadl(false)} />
         </>
       ) : null}
          </div>
          </div>
        ))}
      </div>
       
    </div>
  );
};

export default Gallery;
