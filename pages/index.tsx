import React, { useCallback } from "react";
import { CssBaseline, ThemeProvider, Grid } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { Box } from "@mui/material";

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ROUTES } from "../constants/routes";
import products from "../product.json";
import Login from "./app/login";
import { ProductDetailsProps } from "../types/product.types";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { addItemInCartBeforLogin } from "../actions/cartActionBeforLogin.actions";

const Home: NextPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { cartArray } = useSelector((state: any) => state.beforLoginReducers);

  const [cartItems, setCartItems] = useState<ProductDetailsProps[]>([]);

  const handleOnCartClick = useCallback(
    (item: ProductDetailsProps) => {
      setCartItems((oldarray) => [...oldarray, item]);
      dispatch(addItemInCartBeforLogin([...cartItems, item]));
    },
    [dispatch, cartItems]
  );

  useEffect(() => {
    console.log("Cart Array--->", cartArray);
  }, [cartItems, cartArray]);
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products?.map((item, index) => {
          return (
            <ProductCard
              productName={item.productName}
              description={item.description}
              id={item.id}
              price={item.price}
              key={index}
              img={item.img}
              setCartItem={() => handleOnCartClick(item)}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
