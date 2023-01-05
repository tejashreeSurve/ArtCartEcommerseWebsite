import React, { useCallback } from "react";
import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  ListItemText,
  Grid,
  Typography,
  TableCell,
  TableRow,
  Table,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { boolean } from "yup";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ROUTES } from "../../constants/routes";
import ProductDetails from "../../components/ProductDetails";
import { ProductInCart } from "../../components/ProductInCart";
import { Button } from "../../components/Button";
import { getTotalCartPrice } from "../../utils/commonFunction";

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? "grey" : "grey",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function Cart() {
  const { cartArray } = useSelector((state: any) => state.beforLoginReducers);

  return (
    <>
      {/* <Box> */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="subtitle1">Cart Details</Typography>
      </Box>
      <Grid container sx={{ p: 3 }}>
        <Grid item xs={8}>
          <ProductInCart />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button> Continue Shopping</Button>
            <Button variant="contained">Clear Cart</Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              width: "100%",
              background: "#c2c9d6",
              boxShadow: 3,
              p: 3,
              mt: 1,
            }}
          >
            <Table>
              <TableRow>
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">$ 90</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Tax</TableCell>
                <TableCell align="right">$ 10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{ fontSize: "30px", fontWeight: 500 }}
                >
                  Total
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "34px", fontWeight: 500 }}
                >
                  $ {getTotalCartPrice(cartArray)}
                </TableCell>
              </TableRow>
            </Table>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* </Box> */}
    </>
  );
}

export default Cart;
