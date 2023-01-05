import React from "react";
import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer as MUIDrawer,
  BottomNavigation,
} from "@mui/material";
import { useRouter } from "next/router";
import { styled } from "@mui/system";
import { ProductInCart } from "./ProductInCart";
import { Close } from "@mui/icons-material";
import { Button } from "./Button";
import { Link } from "./Link";
import { ROUTES } from "../constants/routes";
import { ProductInCartPro } from "../types/product.types";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../utils/commonFunction";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "#efefef",
  boxShadow: "4",
  fontSize: "24px",
  fontFamily: "Stint Ultra Condensed",
  letterSpacing: "1",
});

export const Drawer = ({ open, setOpen }: DrawerProps) => {
  const router = useRouter();
  const { cartArray } = useSelector((state: any) => state.beforLoginReducers);

  const onCheckOut = () => {
    router.push(ROUTES.CART);
    setOpen();
  };

  return (
    <MUIDrawer anchor="right" open={open} keepMounted>
      <Box sx={{ width: 400 }}>
        <Toolbar
          sx={{
            backgroundColor: "#efefef",
            boxShadow: 4,
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">Cart Items</Typography>
          <IconButton onClick={setOpen}>
            <Close />
          </IconButton>
        </Toolbar>

        <Box sx={{ mb: "40%" }}>
          <ProductInCart />
        </Box>
        <Box
          sx={{
            p: 2,
            bottom: 0,
            backgroundColor: "#efefef",
            position: "fixed",
            width: "inherit",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2">Total price</Typography>
            <Typography>$ {getTotalCartPrice(cartArray)}</Typography>
          </Box>
          <Button fullWidth variant="contained" onClick={onCheckOut}>
            Checkout
          </Button>
          <Link href={ROUTES.CART}>View Detailed Cart</Link>
        </Box>
      </Box>
    </MUIDrawer>
  );
};

interface DrawerProps {
  open: boolean;
  setOpen: () => void;
}
