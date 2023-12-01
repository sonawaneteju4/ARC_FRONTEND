import React, {useState, useEffect} from "react";
import ProductElem
 from "./ProductElem";


const API = `${process.env.REACT_APP_BASE_API}/product/fetchproduct`;
const SuggestionProduct = ({ category, featureProduct }) => {
  const [product, setproduct] = useState([]);
  const [Loading, setLoading] = useState()
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      setLoading(true);
      const data = await res.json();
      setproduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let url = API;
    if (featureProduct === "true"){
        url += `?featureProduct=true`
    }
    if (category || category === "") {
        url += `&category=${category}`;
      };
      fetchData(url);
  }, [category]);
  return;
  <div className="gird grid-cols-4">
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
    ) : null}
  </div>;
};

export default SuggestionProduct;
