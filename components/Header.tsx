import React, { useCallback, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  // Button,
  Link,
} from "@mui/material";
import { Button } from "./Button";
import { BsPerson, BsCart4, BsHeartFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { ROUTES } from "../constants/routes";
import Login from "../pages/app/login";
import ArtCartAvatarLogo from "./ArtCartAvatarLogo";
import { Drawer } from "./Drawer";
import { useSelector } from "react-redux";

export const Header = () => {
  const router = useRouter();
  const [openCartDrawer, setopenCartDrawer] = useState(false);
  const { cartArray } = useSelector((state: any) => state.beforLoginReducers);

  const handleLoginClick = () => {
    router.push(ROUTES.LOGIN);
  };

  const handleOpenCartDrawer = () => {
    setopenCartDrawer((p) => !p);
  };
  const pathname = router.pathname;

  const isCartRoute = [ROUTES.CART].includes(pathname);
  const handleCartClick = useCallback(
    (e: any) => {
      e.preventDefault();
      router.push(ROUTES.CART);
    },
    [router]
  );

  return (
    <>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar variant="dense">
            <ArtCartAvatarLogo />
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                alignSelf: "flex-center",
              }}
            >
              ArtCart
            </Typography>

            <Box display="flex" gap={2}>
              <Button>Selling</Button>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
              >
                <BsHeartFill />
              </IconButton>
              {!isCartRoute ? (
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2, color: "black" }}
                  onClick={handleOpenCartDrawer}
                >
                  <BsCart4 />
                </IconButton>
              ) : null}
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
                onClick={handleLoginClick}
              >
                <BsPerson />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer open={openCartDrawer} setOpen={handleOpenCartDrawer} />
      </Box>
    </>
  );
};
