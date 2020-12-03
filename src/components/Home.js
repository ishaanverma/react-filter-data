import React, { useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import ProductPage from "./ProductPage";
import Filters from "./Filters";
import { productReducer } from '../reducers/productReducer';
import { API_URL } from "../constants";

const Home = () => {
  const [products, dispatchProducts] = useReducer(productReducer, {
    data: [],
    filtered: [],
    filters: [],
    isLoading: false,
    isError: false,
  });

  // Function to fetch products from API
  const fetchProducts = useCallback(async () => {
    dispatchProducts({ type: "PRODUCT_FETCH_INIT" });
    const result = await axios.get(API_URL);

    try {
      dispatchProducts({
        type: "PRODUCT_FETCH_SUCCESS",
        payload: result.data.products,
      });
    } catch {
      dispatchProducts({ type: "PRODUCT_FETCH_FAILURE" });
    }
  }, [])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container filter-bar">
            <h5 className="my-auto">FILTERS</h5>
          <hr />
        </div>
      </div>
      <div className="container main">
        <Filters dispatch={dispatchProducts} />
        <ProductPage products={products} />
      </div>
    </>
  );
};

export default Home;
