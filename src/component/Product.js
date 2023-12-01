import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ProductView from "../Pages/ProductView";
import { useNavigate, useParams } from "react-router-dom";
import { useFilterContext } from "../context/FilterContext";
import ProductElem from "../Pages/ProductElem";
import Spinner from "./Spinner";
import SearchButton from "../Pages/SearchButton";
import Rhombus from "../helper.js/Rhombus";
import FormatPrice from "../helper.js/FormatPrice";

const API =
  `${process.env.REACT_APP_BASE_API}/product/fetchproduct`;

const Product = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setproduct] = useState([]);
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  

  const fetchData = async (url) => {
    try {
      if(!searchTerm){
        setLoading(true);
      }
      const res = await fetch(url);
      const data = await res.json();
      setproduct(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  useEffect(() => {
    let url = API;
    if (category || category === "") {
      url += `?category=${category}`;
    }
    
    if (sortType === "priceAsc") {
      url += "&sort=price";
    } else if (sortType === "priceDesc") {
      url += "&sort=-price";
    } else if (sortType === "dateDesc") {
      url += "&sort=-Date";
    }
    if (searchTerm) {
      url += `&name=${searchTerm}`;
    }
    fetchData(url);
  }, [category, sortType, searchTerm]);
  
  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const { filter_products } = useFilterContext();

  return (
    <>
      <div className="mt-16 ">
        <div className="lg:flex lg:justify-between items-center p-1">
          <div className="flex  lg:pl-5 pl-0 pr-10">
            <Rhombus onClick={() => setCategory("")} value={"All Product"} />
            <Rhombus onClick={() => setCategory("mobile")} value={"Mobile"} />
            <Rhombus onClick={() => setCategory("laptop")} value={"Laptop"} />
            <Rhombus
              onClick={() => setCategory("accessories")}
              value={"Accessories"}
            />
          </div>
          <hr className="m-1"/>
          <div className="flex justify-end  relative items-center ">
            <SearchButton onChange={(e) => setSearchTerm(e.target.value)}  />
            {/* <input
              type="search"
              className="rounded-2xl block w-full px-8 py-2 text-sm text-black   mx-2 text-center "
              placeholder="Type To Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center  bg-gray-100/95">
          <div className="px-5">
            {" "}
            {`${filter_products.length}: Product avaible`}{" "}
          </div>
          <div className="order-last mr-8">
            <FormControl
              htmlFor="sort-select"
              sx={{ m: 1, minWidth: 120 }}
              size="small"
            >
              <InputLabel id="demo-select-small">Sort</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
                value={sortType}
                onChange={handleSortChange}
              >
                <MenuItem value="All Product" onClick={() => setCategory("")}>
                  <em>All Product</em>
                </MenuItem>
                <MenuItem value="dateDesc">New Launch</MenuItem>
                <MenuItem value="priceAsc">Low To High</MenuItem>
                <MenuItem value="priceDesc">High To Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <hr />
        {loading && <Spinner />}
        <div>
          <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 bg-white p-5">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  {/* <ProductOffer /> */}
                  <img
                    className="w-full h-80 hover:contrast-50 transition-all ease-in-out delay-300"
                    src='https://i.ibb.co/gWznG7j/png-20230527-200435-0000.png'
                    alt="Sunset in the mountains"
                  />
                  <div className="px-3 py-4">
                    <div className="font-bold text-base mb-2 flex justify-between">
                      <div>Print Your Own Design</div>
                      <div>
                        <FormatPrice price={399}/>
                      </div>
                    </div>
                      <span className="font-light text-center">Currently Under Devlopement!</span>
                  </div>
                </div>
            
            {Array.isArray(product) && product.length > 0 ? (
              product.map((items) => (
    
                <div key={items._id}>
                  <ProductElem
                    _id={items._id}
                    name={items.name}
                    image={items.image}
                    price={items.price}
                    description={items.description}
                    category={items.category}
                  />
                </div>
              ))
            ) : product ? (
              <div key={product._id}>
                <ProductElem
                  _id={product._id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center h-screen">
                <p className="text-center bg-black text-4xl text-white">
                  Ohhh No Product Found ?
                </p>
              </div>
            )}
          </div>
        </div>

        {/* {loading && <Spinner  />} */}
      </div>
    </>
  );
};

export default Product;
