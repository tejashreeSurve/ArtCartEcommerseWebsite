import {
  Button as MUIButton,
  ButtonProps,
  CircularProgress,
} from "@mui/material";

const outlinedDisabledStyles = { opacity: 0.7, color: "secondary.main" };
const containedDisabledStyles = {
  bgcolor: "neutral.disabled",
  color: "neutral.white",
};

export const Button = ({
  isLoading,
  sx,
  disabled,
  size,
  ...props
}: CustomButtonProps) => {
  return (
    <MUIButton
      {...props}
      sx={{
        fontWeight: "200",
        fontFamily: "Stint Ultra Condensed",
        textDecoration: "none",
        textTransform: "none",
        letterSpacing: 0.5,
        fontSize: "24px",
        ...sx,
      }}
    >
      {props.children}
      {isLoading && (
        <CircularProgress color="inherit" sx={{ ml: 1 }} size={12} />
      )}
    </MUIButton>
  );
};

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  component?: string;
  size?: "large" | "small" | "medium";
}
