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
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={10}>
              <Typography variant="caption" color="white">
                ArtCart©2020
              </Typography>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="space-evenly">
              <Stack direction="row" spacing={2}>
                <Link
                  href="https://youtube.com/@artisttejusworld"
                  target="_blank"
                >
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
          {/* <Box textAlign="center">
            <Typography variant="caption">ArtCart&reg;2020</Typography>
          </Box> */}
        </Container>
      </Box>
    </>
  );
};
