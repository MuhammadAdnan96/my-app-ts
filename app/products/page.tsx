"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Header from "@/components/header/header";
import { addProducts } from "@/redux-toolkit/features/productsSlice";
import useFetch from "@/lib/useFetch";
import styles from "./style.module.css";

export default function Products() {
  const { products } = useFetch("https://fakestoreapi.com/products");

  // const dispatch = useDispatch();

  // const products = useSelector(
  //   (state: { productsReducer: { products: any } }) =>
  //     state.productsReducer.products
  // );
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const response = await res.json();
  //     dispatch(addProducts(response));
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <Header />
      <div className={styles.grid}>
        {products.map((product: any) => (
          <div className={styles.view} key={product.id}>
            <div>
              <Link
                href="/productDetail/[id]"
                as={`/productDetail/${product.id}`}
              >
                <img
                  id={product.id}
                  src={product.image}
                  style={{ width: "250px", height: "250px" }}
                  alt="React Image"
                />
              </Link>
            </div>
            <div>{product.title}</div>
            <div>{`$${product.price}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
