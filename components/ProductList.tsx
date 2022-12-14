import React from "react";
import { ProductCard, ProductCardProps } from "./ProductCard";
import { Grid } from "@mui/material";

export interface ProductListProps {
  items: ProductCardProps[];
}
export const ProductList = ({ items }: ProductListProps) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
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
