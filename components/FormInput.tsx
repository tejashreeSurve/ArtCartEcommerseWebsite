import {
  InputAdornment,
  InputBaseComponentProps,
  TextField,
} from "@mui/material";
import { Box } from "@mui/material";
import {
  StyledLabel,
  StyledErrorText,
  StyledHelperText,
} from "./StyledComponents";
import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";

export const FormInput = ({
  value,
  onChange,
  label,
  type,
  error,
  name,
  placeholder,
  onBlur,
  startAndornment,
  endAndornment,
  helperText,
  helperTooltip,
  required,
  disabled,
  inputProps,
  sx,
  readOnly,
  autoComplete,
  multiline,
}: FormInputProps) => {
  return (
    <Box>
      {label && (
        <StyledLabel>
          {label}
          {required && "*"}
        </StyledLabel>
      )}
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: error ? "red" : "",
            },
          },
        }}
        fullWidth
        variant="outlined"
        size="small"
        id="outlined-basic"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        autoComplete={autoComplete}
        multiline={multiline}
        InputProps={{
          sx: { height: 55, ...sx },
          endAdornment: endAndornment && (
            <InputAdornment position="end">{endAndornment}</InputAdornment>
          ),
          startAdornment: startAndornment && (
            <InputAdornment position="start">{startAndornment}</InputAdornment>
          ),
        }}
        inputProps={{ ...inputProps, readOnly }}
      />
      {error && <StyledErrorText sx={{ mt: 0.5 }}>{error}</StyledErrorText>}
    </Box>
  );
};

export interface FormInputProps {
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label?: string;
  type?: string;
  error?: string | boolean;
  name?: string;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  startAndornment?: ReactNode;
  endAndornment?: ReactNode;
  helperText?: string | ReactNode;
  required?: boolean;
  disabled?: boolean;
  inputProps?: InputBaseComponentProps;
  helperTooltip?: string;
  sx?: any;
  readOnly?: boolean;
  autoComplete?: string;
  multiline?: boolean;
}
