import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  IconButton,
  Box,
} from "@mui/material";
import { Button } from "./Button";
import { BsCart4, BsHeartFill } from "react-icons/bs";
import { Router, useRouter } from "next/router";
import { ROUTES } from "../constants/routes";
import { createRoute } from "../utils/createRoute";
import { ProductDetailsProps } from "../types/product.types";

export interface ProductCardProps {
  productName: string;
  id: string;
  description: string;
  price: string;
  img: string;
  setCartItem: () => void;
}

export const ProductCard = ({
  productName,
  id,
  description,
  price,
  img,
  setCartItem,
}: ProductCardProps) => {
  let router = useRouter();
  // const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  const onClickDetails = useCallback(
    (id: string) => {
      // console.log("Id", id);
      // const url = createRoute(ROUTES.PRODUCT, { productId: id });
      // router.push(url);
    },
    [router]
  );

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  return (
    <Card
      sx={{
        maxwidth: 345,
        flex: "0 1 calc(25% - 3em)",
        boxsizing: "border-box",
        margin: "2rem 1em",
        boxshadow: "10",
        transition: state.raised
          ? "scale3d(1.05, 1.05, 1)"
          : "transform 0.15s ease-in-out",
      }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
    >
      <Box onClick={() => onClickDetails(id)}>
        <CardMedia
          component="img"
          alt="green iguana"
          image={img}
          height="300"
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h4">Price : $ {price}</Typography>
        </CardContent>
      </Box>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2, color: "black", marginTop: "auto" }}
          onClick={setCartItem}
        >
          <BsCart4 />
        </IconButton>
        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <BsHeartFill />
        </IconButton>
      </CardActions>
    </Card>
  );
};
