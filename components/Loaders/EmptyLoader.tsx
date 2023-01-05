import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const EmptyLoader = ({ height }: { height?: string }) => {
  return (
    <Box
      padding={4}
      height={height ? height : "100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="primary"></CircularProgress>
    </Box>
  );
};
