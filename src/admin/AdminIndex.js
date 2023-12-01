import React, { useEffect,useState } from "react";
import AdminNav from "./AdminNav";
import Spinner from "../component/Spinner";
import { useNavigate } from "react-router-dom";

const AdminIndex = () => {
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    if(!sessionStorage.getItem("a-token")){
      nav("/admin/login")
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);



  return (
    <div>
            {isLoading && <Spinner isAdminPage={true} isHomePage={false} />}

      <div className="pt-16 flex flex-row">
        <div className="basis-1/4 p-5 m-5 flex">
          <div className="mt-auto mb-auto block">
            <img
              className="h-32  mr-auto imgShadow"
              src="/image/orders.png"
              alt=""
            />
          </div>
          <div className="pl-10">
            <p className="py-1 font-bold">New Orders (4)</p>
            <p className="py-1 font-bold">Printing (2)</p>
            <p className="py-1 font-bold">Package (5)</p>
            <p className="py-1 font-bold">Shiping (5)</p>
            <p className="py-1 font-bold">Deliverd (102)</p>
            <p className="py-1 font-bold">Exchange (3)</p>
            <p className="py-1 font-bold">Cancle (2)</p>
            <p className="py-1 font-bold">All Orders (122)</p>
          </div>
        </div>
        <div className="basis-1/4  p-5 m-5 flex">
          <div className="pl-10 mt-auto mb-auto">
            <p className="py-1 font-bold">New Users(2)</p>
            <p className="py-1 font-bold">Active Users(2)</p>
            <p className="py-1 font-bold">Users Growth(2)</p>
          </div>
          <div className="mt-auto mb-auto block">
            <img
              className="h-32 mr-auto imgShadow"
              src="/image/admin.png"
              alt=""
            />
          </div>
        </div>
        <div className="basis-1/4 p-5 m-5 flex">
          <div className="mt-auto mb-auto block">
            <img
              className="h-32  mr-auto imgShadow"
              src="/image/inventory.png"
              alt=""
            />
          </div>
          <div className="pl-10">
            <p className="py-1 font-bold">Add New Products</p>
            <p className="py-1 font-bold">Update Product</p>
            <p className="py-1 font-bold">Remove  Product </p>
            <p className="py-1 font-bold">Sales Products</p>
            <p className="py-1 font-bold">Inventory </p>
            <p className="py-1 font-bold">Offers</p>
            <p className="py-1 font-bold">Shipping</p>
          </div>
        </div>
        <div className="basis-1/4 p-5 m-5 flex">
          <div className="mt-auto mb-auto block">
            <img
              className="h-32  mr-auto imgShadow"
              src="/image/qt.png"
              alt=""
            />
          </div>
          <div className="pl-10">
            <p className="py-1 font-bold">New Quotes (4)</p>
            <p className="py-1 font-bold">Connected (2)</p>
            <p className="py-1 font-bold">Waiting (5)</p>
            <p className="py-1 font-bold">Denied (5)</p>
            <p className="py-1 font-bold">Project Under Work(102)</p>
            <p className="py-1 font-bold">Complted (3)</p>
            <p className="py-1 font-bold">All Quotes (122)</p>
          </div>
        </div>
      </div>
      <div className="pt-16 flex flex-row">
        <div className="basis-1/4 p-5 m-5 flex">
          <div className="mt-auto mb-auto block">
            <img
              className="h-32  mr-auto imgShadow"
              src="/image/so.png"
              alt=""
            />
          </div>
          <div className="pl-10">
            <p className="py-1 font-bold">Create Offer(4)</p>
            <p className="py-1 font-bold">Printing (2)</p>
            <p className="py-1 font-bold">Package (5)</p>
            <p className="py-1 font-bold">Shiping (5)</p>
            <p className="py-1 font-bold">Deliverd (102)</p>
            <p className="py-1 font-bold">Exchange (3)</p>
            <p className="py-1 font-bold">Cancle (2)</p>
            <p className="py-1 font-bold">All Orders (122)</p>
          </div>
        </div>
        <div className="basis-1/4  p-5 m-5 flex">
          <div className="pl-10 mt-auto mb-auto">
            <p className="py-1 font-bold">Services(2)</p>
            <p className="py-1 font-bold">Active Users(2)</p>
            <p className="py-1 font-bold">Users Growth(2)</p>
          </div>
          <div className="mt-auto mb-auto block">
            <img
              className="h-32 mr-auto imgShadow"
              src="/image/serv.png"
              alt=""
            />
          </div>
        </div>
        <div className="basis-1/4 p-5 m-5 flex">
          <div className="mt-auto mb-auto block">
            <img
              className="h-32  mr-auto imgShadow"
              src="/image/g.png"
              alt=""
            />
          </div>
          <div className="pl-10">
            <p className="py-1 font-bold">Gallary</p>
            <p className="py-1 font-bold">Update Product</p>
            <p className="py-1 font-bold">Remove  Product </p>
            <p className="py-1 font-bold">Sales Products</p>
            <p className="py-1 font-bold">Inventory </p>
            <p className="py-1 font-bold">Offers</p>
            <p className="py-1 font-bold">Shipping</p>
          </div>
        </div>
        <div className="basis-1/4 p-5 m-5 flex">
          <div className="mt-auto mb-auto block">
            <img
              className="h-32  mr-auto imgShadow"
              src="/image/r.png"
              alt=""
            />
          </div>
          <div className="pl-10">
            <p className="py-1 font-bold">Admin (4)</p>
            <p className="py-1 font-bold">Connected (2)</p>
            <p className="py-1 font-bold">Waiting (5)</p>
            <p className="py-1 font-bold">Denied (5)</p>
            <p className="py-1 font-bold">Project Under Work(102)</p>
            <p className="py-1 font-bold">Complted (3)</p>
            <p className="py-1 font-bold">All Quotes (122)</p>
          </div>
        </div>
      </div>

      {/* <div className=" pt-16 text-5xl text-center">
        <div
          className=" bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/m5cs.jpg")` , height:'650px'}}
        >
          <h1 className="pt-20" style={{ fontFamily: "var(--default-font)" }}>
            default Ar Customs
          </h1>
        </div>

        <div
          className=" bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/mainbgg.jpg")` , height:'650px'} }
        >
          <h1 className="pt-20" style={{ fontFamily: "var(--heading-font)" }}>
            AR Customs
          </h1>
        </div>

        <div
          className="bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/m5cs.jpg")` , height:'650px'}}
        >
          <p className="pt-20" style={{ fontFamily: "var(--art-font)" }}>
            Art Content Something
          </p>
        </div>

        <div
          className=" bg-cover bg-fixed"
          style={{ backgroundImage: `url("/image/mainbgg.jpg")`  , height:'650px'}}
        >
          <p style={{ fontFamily: "var(--content-font)" }}>
            Whereas disregard and contempt for human rights have resulted
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AdminIndex;
