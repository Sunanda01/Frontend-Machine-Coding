import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import "./index.css";
import Pagination from "./Pagination";

const ProductPagination = () => {
  const PRODUCT_LIMIT = 194;
  const inputRef = useRef(null);
  //   console.log(inputRef);
  const [limit, setLimit] = useState(PRODUCT_LIMIT);
  //   console.log(limit);
  const [productArray, setProductArray] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const fetchData = async () => {
    const dummyProduct = await fetch(
      `https://dummyjson.com/products?limit=${limit}`
    );
    const productJSON = await dummyProduct.json();
    setProductArray(productJSON.products);
    console.log(productJSON.products);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    fetchData();
    setCurrPage(0);
  }, [limit]);

  //Pagination
  const PAGE_SIZE = 8;
  const totalProduct = productArray.length;
  const totalPage = Math.ceil(totalProduct / PAGE_SIZE);
  const start = currPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return !productArray.length ? (
    <h1>No Product Found</h1>
  ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>Pagination Machine Coding</h1>
      <div className="input-container">
        <h2>Enter The Limit Of Product</h2>
        <input
          type="text"
          value={limit}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (isNaN(value) || value > PRODUCT_LIMIT) return;
            setLimit(value);
          }}
          ref={inputRef}
          autoFocus
        />
      </div>
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        totalPage={totalPage}
      />
      <div className="container">
        {productArray.slice(start, end).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductPagination;
