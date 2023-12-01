import { useReducer } from "react";
import { useEffect } from "react";
import { createContext,useContext } from "react";
import { useGlobleContext } from "./context";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initalState = {
    filter_products: [],
    all_products: [],
    product_view : true,

}

export const FilterContextProvider = ({ children }) => {
    const {products} = useGlobleContext();

    const [state, dispatch] = useReducer(reducer, initalState);

  //Set All Product

  const setProductView = () => {
    return dispatch({type : "SET_PRODUCTVIEW"})
  }

    useEffect(() =>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products})
    },[products])
 

  return (
    <FilterContext.Provider value={{ ...state, setProductView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
}