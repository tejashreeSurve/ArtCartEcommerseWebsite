import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledLabel = styled(Typography)({
  display: "flex",
  flexDirection: "column",
  fontFamily: "Stint Ultra Expanded",
  fontWeight: 600,
  fontSize: "19px",
});

export const StyledHelperText = styled(Typography)({
  fontSize: "12px",
});

export const StyledErrorText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 0,
  color: "red",
}));

export const FontStyleTypo = styled(Typography)(({}) => ({
  fontFamily: "Stint Ultra Condensed",
  letterSpacing: 1,
  fontSize: "24px",
}));
