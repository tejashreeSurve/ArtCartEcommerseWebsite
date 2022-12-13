import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link,
  Paper,
  Avatar,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import React from "react";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <Grid container spacing={2} m="0" sx={{ backgroundColor: "black" }}>
        <Grid item xs={10}>
          <Typography variant="caption" color="white">
            ArtCart©2020
          </Typography>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="space-evenly">
          <Stack direction="row" spacing={2}>
            <Link href="https://youtube.com/@artisttejusworld" target="_blank">
              <Avatar>
                <BsInstagram color="black" />
              </Avatar>
            </Link>
            <Link
              href="https://instagram.com/artist_teju_world?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              <Avatar>
                <BsYoutube color="Black" />
              </Avatar>
            </Link>
            <Link
              href="https://instagram.com/artist_teju_world?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              <Avatar>
                <BsFacebook color="Black" />
              </Avatar>
            </Link>
          </Stack>
        </Grid>
      </Grid>
      {/* <Box>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography variant="caption" color="white">
              ArtCart©2020
            </Typography>

            <Box display="flex" gap={2}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
              >
                <BsInstagram />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
              >
                <BsYoutube />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "black" }}
              >
                <BsFacebook />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box> */}
    </>
  );
};
