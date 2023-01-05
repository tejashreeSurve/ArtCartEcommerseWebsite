import React from "react";
import { Box, Avatar } from "@mui/material";

function ArtCartAvatarLogo() {
  return (
    <Box>
      <Avatar
        alt="ArtCartLogo"
        src="/static/images/artCartLogo.jpg"
        sx={{ width: 56, height: 56, marginRight: "20px" }}
      />
    </Box>
  );
}

export default ArtCartAvatarLogo;
