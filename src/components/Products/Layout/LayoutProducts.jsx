import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../cardProduct/CardProduct";
import styles from "./LayoutProducts.module.css";

const LayoutProducts = ({ products }) => {
  const { category } = useParams();
  let productsFiltered = products;
  if (category && category !== "todos") {
    productsFiltered = products.filter(
      (product) => product.category === category
    );
  }
  return (
    <div className={`container ${styles.container1}`}>
      {productsFiltered.map((product) => {
        return (
          <CardProduct className="row"
          key={product.id}
            id={product.id}
            image={product.img}
            title={product.title}
            price={product.price}
            desc={product.description}
            categ={product.category}
            amount={product.amount}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default LayoutProducts;
