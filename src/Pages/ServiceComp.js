import React, { useState, useEffect } from "react";
import { BsGear } from "react-icons/bs";
import { MdGraphicEq } from "react-icons/md";
import { IoColorPaletteSharp } from "react-icons/io5";
import { MdOutlineElectricBike } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";
import { Tooltip } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import Spinner from "../component/Spinner";
import { Modal } from "@mui/material";
import ModalImg from "./ModalImg";
import PageNavigation from "./PageNavigation";

const API = `${process.env.REACT_APP_BASE_API}/services/getservices`;

const ServiceComp = () => {
  const [services, setservices] = useState([]);
  const [modal, setmodal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { _id } = useParams();

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      setLoading(true);
      const data = await res.json();
      setservices(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(`${process.env.REACT_APP_BASE_API}/services/getservices?_id=${_id}`);
  }, [_id]);

  return (
    <div className="mt-16 bg-white">
      {loading && <Spinner />}
      {services.map((items) => (
        <>
          <PageNavigation title={items.name} category={items.category} />
          <div className="flex flex-row m-5" key={items._id}>
            {/* Image  */}
            <div className="basis-3/5 m-2 rounded-lg">
              <img
              style={{height:"480px"}}
                onClick={() => setmodal(true)}
                src={items.img}
                className=" hover:grayscale  block ml-auto  mr-auto"
              ></img>
            </div>

            {/* Title */}
            <div className="basis-1/3 mx-3 my-2 rounded-xl px-2">
              <p style={{ fontFamily: "var(--content-font)" }} className="text-3xl  pt-5">{items.title}</p>
              <p style={{ fontFamily: "var(--art-font)" }} className="pt-5 font-bold  text-slate-700 hover:text-blue-600">
                {items.description}
              </p>
              <div className="mt-5">
                <div className="py-3 rounded-xl">
                  <p className="mt-1">
                    <span className="rounded-xl font-bold ">
                      Our feature Services :-
                    </span>
                    <hr className="" />
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-3">
                    {items.service_list.map((service, index) => (
                      <div key={index}>
                        <butoon className="flex justify-center px-2 py-2 bg-black cursor-pointer text-white rounded-xl font-bold hover:bg-slate-800 ">
                          {service}
                        </butoon>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>

          <div className="py-3 px-3">
            <div className="mt-3 m-3">
              <p className="font-bold pl-5 text-xl underline underline-offset-4 shadow-2xl decoration-indigo-300 hover:decoration-indigo-700">
              <span class="px-2">
                  <span class=" inline-flex animate-ping rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                Key Features
              </p>
              <div className="grid grid-cols-5 gap-3">
                {items.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-teal-100 p-1 m-1 rounded hover:bg-gradient-to-r from-teal-300 to-sky-300 text-black"
                  >
                    {
                      feature /* {`${feature.split(" ").slice(0, 30).join(" ")}...`} */
                    }
                  </div>
                ))}
              </div>
            </div>
            <hr className=""></hr>
            <div className="py-3 px-3">
              <div className="mt-3  rounded-xl m-3">
                <p className="text-xl font-bold pl-5 underline underline-offset-4 shadow-2xl  decoration-indigo-300 hover:decoration-indigo-700">
                <span class="px-2">
                  <span class=" inline-flex animate-ping rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                  Why We?
                </p>
                <div className="grid grid-cols-3  mt-5 gap-2">
                  <div className="bg-sky-200 p-5 rounded-xl hover:bg-gradient-to-r from-teal-300 to-sky-300">
                    <div className="flex justify-center">
                      <span className="text-4xl text-blue-900">
                        <BsGear />
                      </span>
                    </div>
                    <div>
                      <Tooltip content="3M AveryDenison" placement="bottom">
                        <p className="font-normal text-center ">
                          Geninun Parts
                        </p>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="bg-sky-200 p-5 rounded-xl hover:bg-gradient-to-r from-teal-300 to-sky-300">
                    <div className="flex justify-center">
                      <span className="text-4xl text-blue-900">
                        <BsCheckAll />
                      </span>
                    </div>
                    <div>
                      <Tooltip
                        content="Upto 1-5 yr Warrenty On Verious Material"
                        className="flex justify-center"
                        placement="bottom"
                      >
                        <p className="font-normal text-center">
                          1-5 Yr Warrenty*
                        </p>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="bg-sky-200 p-5 rounded-xl hover:bg-gradient-to-r from-teal-300 to-sky-300">
                    <div className="flex justify-center">
                      <span className="text-4xl text-blue-900">
                        <BsWallet2 />
                      </span>
                    </div>
                    <div>
                      <Tooltip
                        content="Geniun Price No Extra Cost"
                        placement="bottom"
                      >
                        <p className="font-normal text-center">
                          Affordable In Market
                        </p>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="bg-sky-200 p-5 rounded-xl hover:bg-gradient-to-r from-teal-300 to-sky-300">
                    <div className="flex justify-center">
                      <span className="text-4xl text-blue-900">
                        <MdOutlineElectricBike />
                      </span>
                    </div>
                    <div>
                      <Tooltip
                        content="Free Pick And Drop Within 20Km For Shop"
                        placement="bottom"
                      >
                        <p className=" text-center">Free Pick Up And Drop</p>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="bg-sky-200 p-5 rounded-xl hover:bg-gradient-to-r from-teal-300 to-sky-300">
                    <div className="flex justify-center">
                      <span className="text-4xl text-blue-900">
                        <IoColorPaletteSharp />
                      </span>
                    </div>
                    <div>
                      <Tooltip content="Material Tailwind" placement="bottom">
                        <p className="font-normal  text-center">
                          Unlimited Color Options**
                        </p>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="bg-sky-200 p-5 rounded-xl hover:bg-gradient-to-r from-teal-300 to-sky-300">
                    <div className="flex justify-center">
                      <span className="text-4xl text-blue-900">
                        <MdGraphicEq />
                      </span>
                    </div>
                    <div>
                      <Tooltip content="Material Tailwind" placement="bottom">
                        <p className="font-normal text-center">
                          All Design And Graphic Option
                        </p>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {modal ? (
            <>
              <ModalImg image={items.img} onClick={() => setmodal(false)} />
            </>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default ServiceComp;
