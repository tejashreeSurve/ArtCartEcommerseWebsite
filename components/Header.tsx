import React from "react";
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

export const Header = () => {
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar variant="dense">
            <Box>
              <Avatar
                alt="ArtCartLogo"
                src="/static/images/artCartLogo.jpg"
                sx={{ width: 56, height: 56, marginRight: "20px" }}
              />
            </Box>
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
              {/* <Button>Buying</Button> */}
              <Button>Selling</Button>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
              >
                <BsHeartFill />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
              >
                <BsCart4 />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
              >
                <BsPerson />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
