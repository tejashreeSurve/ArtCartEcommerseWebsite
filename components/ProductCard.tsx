import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

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
  return (
    <Card
      sx={{ maxWidth: 345 }}
      // className="animate__animated animate__fadeIn"
      // raised
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="green iguana"
          image={img}
          height="300"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
          <Typography variant="h4">Price : {price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">Add to wishlist</Button>
      </CardActions>
    </Card>
  );
};
