import React from "react";
import { Grid, Button } from "@mui/material";
import ButtonGroup from "./ButtonGroup";

export const AddToCartButton = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{ marginTop: "1rem", justifyContent: "space-around" }}
    >
      <ButtonGroup />

      <Button
        sx={{
          background: "#f0ede6",
          fontFamily: "cursive",
        }}
      >
        Add to Cart
      </Button>
      <Button
        sx={{
          background: "#f0ede6",
          fontFamily: "fantasy",
        }}
      >
        Add to Wishlist
      </Button>
    </Grid>
  );
};
