import React from "react";
import {
  ButtonGroup as MUIButtonGroup,
  Button,
  ButtonGroupProps,
} from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "@emotion/styled";

export default function ButtonGroup({
  onAdd,
  onRemove,
  sx,
  noOfItems,
  size,
  ...props
}: CustomButtonGroupProps) {
  const StyledButtonGroup = styled(MUIButtonGroup)({
    "& .MuiButtonGroup-grouped:not(:last-of-type)": {
      borderRightColor: "#5e636e",
    },
  });
  return (
    <StyledButtonGroup variant="outlined" sx={sx} size="large" {...props}>
      <Button>
        <FaPlus />
      </Button>
      <input
        value={1}
        style={{
          border: 0,
          width: "50px",
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "cursive",
        }}
      ></input>
      <Button>
        <FaMinus />
      </Button>
    </StyledButtonGroup>
  );
}

interface CustomButtonGroupProps extends ButtonGroupProps {
  onAdd?: () => void;
  onRemove?: () => void;
  sx?: { [key: string]: string };
  noOfItems?: string;
}
