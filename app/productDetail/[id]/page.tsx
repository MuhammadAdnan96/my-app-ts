"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import styles from "./styles.module.css";
import useFetch from "@/lib/useFetch";
import { useParams } from "next/navigation";

// export const getStaticProps = async (context: any) => {
//   const res = await fetch(
//     `https://fakestoreapi.com/products/${context.params.id}`
//   );
//   const { productDetail: any } = await res.json();
//   return {
//     props: { productDetail: any },
//   };
// };
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://fakestoreapi.com/products`);
//   const productDetail = await res.json();
//   const ids = productDetail.map((product: any) => product.id);

//   const paths = ids.map((product: any) => ({
//     params: { id: product.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
const Details = ({ productDetail }: any) => {
  let { id } = useParams();
  const { products }: any = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <>
      <div className={styles.desHeader}>
        <div>
          <h1 className={styles.heading}>Product details</h1>
        </div>
        <div>
          <BsSearch
            className={styles.iconSearchh}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div>
          <AiOutlineShoppingCart
            className={styles.iconCartt}
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
      <div className={styles.desData} key={products?.id}>
        <div className={styles.imgDiv}>
          <img
            className={styles.desImg}
            src={products?.image}
            alt="React Image"
          />
        </div>
        <div className={styles.desDetail}>
          <h1>
            <b>{products?.title}</b>
          </h1>
          <h3>Price: ${products?.price}</h3>
          <h3>Category: {products?.category}</h3>
          <div className="size">
            <button className={styles.btn}>M</button>
            <button className={styles.btn}>L</button>
            <button className={styles.btn}>XL</button>
          </div>
          <h4 className={styles.detail}>{products?.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Details;
