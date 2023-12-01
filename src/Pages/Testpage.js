import React from "react";
import { FaDirections } from 'react-icons/fa';
import AdminIndex from "../admin/AdminIndex";
import Spinner from "../component/Spinner";

const Testpage = () => {
  return (
    <>
    <Spinner isAdminPage={true}/>
    {/* <AdminIndex/>
     */}
    </>
  );
};

export default Testpage;
