import React from "react";
import { ProductCard, ProductCardProps } from "./ProductCard";
import { Grid } from "@mui/material";

export interface ProductListProps {
  items: ProductCardProps[];
}
export const ProductList = ({ items }: ProductListProps) => {
  return (
    <Grid container spacing={4} sx={{ margin: "2rem" }}>
      {items?.map((item, index) => {
        return (
          <ProductCard
            productName={item.productName}
            discription={item.discription}
            id={index}
            price={item.price}
            key={index}
            img={item.img}
          />
        );
      })}
    </Grid>
  );
};
