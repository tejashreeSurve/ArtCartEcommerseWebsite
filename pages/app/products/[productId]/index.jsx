import React from "react";
import { Paper, Box, Grid, Typography, Rating, Button } from "@mui/material";
import ButtonGroup from "../../../../components/ButtonGroup";
import { AddToCartButton } from "../../../../components/AddToCartButton";

export default function ProductDetails() {
  return (
    <Paper sx={{ margin: 5, flexGrow: 4 }}>
      <Grid container wrap="nowrap" spacing={2} justifyContent="center">
        <Grid item xs={6} sx={{ margin: "1rem" }}>
          <Box
            component="img"
            sx={{
              height: "50%",
              width: "100%",
            }}
            alt="The house from the offer."
            src="/static/images/6.jpg"
          ></Box>
        </Grid>
        <Grid item xs={6} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h2" component="div">
                Beautifull Girl Painting
              </Typography>
              <Rating name="read-only" value={4} readOnly />
              <Typography variant="subtitle2" color="text.secondary">
                The modern day is no different, painting is at the very core of
                how humans express their hopes, dreams, fears, and emotions.
                With time has come a slew of different styles, mediums, and
                subjects that have seen the art of painting diversify and
                evolve. Today, painting is as highly regarded as ever, with many
                different schools and techniques producing art in wildly
                differing ways.
              </Typography>
              <Typography variant="h1" sx={{ marginTop: "1rem" }}>
                $ 16
              </Typography>
              <AddToCartButton />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
