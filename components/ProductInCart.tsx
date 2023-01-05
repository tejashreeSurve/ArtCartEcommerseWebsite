import {
  Grid,
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { DeleteOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { ProductInCartPro } from "../types/product.types";
import { removeItemFromCart } from "../actions/cartActionBeforLogin.actions";

export const ProductInCart = () => {
  const dispatch = useDispatch();
  const { cartArray } = useSelector((state: any) => state.beforLoginReducers);

  const dataArray = [
    {
      productName: "Anime 1",
      id: "1",
      price: "$1",
      img: "/static/images/1.jpg",
    },
    {
      productName: "Anime 2",
      id: "2",
      price: "$2",
      img: "/static/images/2.jpg",
    },
    {
      productName: "Anime 3",
      id: "3",
      price: "$1",
      img: "/static/images/3.jpg",
    },
    {
      productName: "Anime 4",
      id: "4",
      price: "$2",
      img: "/static/images/2.jpg",
    },
    {
      productName: "Anime 5",
      id: "5",
      price: "$1",
      img: "/static/images/3.jpg",
    },
    {
      productName: "Anime 6",
      id: "6",
      price: "$1",
      img: "/static/images/3.jpg",
    },
  ];

  const handleDelete = (index: number) => {
    dispatch(removeItemFromCart(index));
  };

  return (
    <>
      {cartArray.length === 0 ? (
        <Grid sx={{ m: 1 }}>
          <Typography variant="subtitle2">
            Your Cart is empty shop now
          </Typography>
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {cartArray.map((data: ProductInCartPro, index: number) => (
            <Grid item key={data.id} sx={{ m: 1 }}>
              <Card sx={{ display: "flex" }} elevation={4}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, m: 1, height: 100 }}
                    image={data.img}
                    alt="Live from space album cover"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "space-between",
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography component="div" variant="h5">
                          {data.productName}
                        </Typography>

                        <IconButton onClick={() => handleDelete(index)}>
                          <DeleteOutlined />
                        </IconButton>
                      </Box>
                      <Typography>{data.price}</Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button>click</Button>
                      </Box>
                    </CardContent>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
