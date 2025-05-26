import { createContext, useEffect, useReducer, useState } from "react";
import api from "../configs/api";

export const ProductContext = createContext();

const initialState = {
  products: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  totalPages: 0,
  totalProducts: 0,
};
const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        page: action.payload.page,
        limit: action.payload.limit,
        totalPages: action.payload.totalPages,
        totalProducts: action.payload.totalProducts,
      };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "SET_PAGE":
      return { ...state, page: action.payload };

    default:
      return state;
  }
};

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await api.get(
          `/products?page=${state.page}&limit=${state.limit}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };
    fetchProducts();
  }, [state.page]);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;
