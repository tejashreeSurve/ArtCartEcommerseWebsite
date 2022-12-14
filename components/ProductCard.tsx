import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  IconButton,
} from "@mui/material";
import { Button } from "./Button";
import { BsCart4, BsHeartFill } from "react-icons/bs";

export interface ProductCardProps {
  productName: string;
  id: number;
  discription: string;
  price: string;
  img: string;
}

export const ProductCard = ({
  productName,
  id,
  discription,
  price,
  img,
}: ProductCardProps) => {
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });
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
      <CardActionArea>
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
            {discription}
          </Typography>
          <Typography variant="h4">Price : {price}</Typography>
        </CardContent>
      </CardActionArea>
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
