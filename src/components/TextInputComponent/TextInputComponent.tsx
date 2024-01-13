import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type TextInputComponentProps = {
  id: string;
  label: string;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  margin?: "none" | "normal" | "dense";
  color?: "primary" | "error" | "secondary" | "info" | "success" | "warning";
  customClass?: "" | "mui-input-text-secondary" | "mui-input-text-tertiary" | "mui-input-text-quaternary";
};

export default function TextInputComponent({
  id = "id",
  label = "label",
  variant = "outlined",
  size = "medium",
  margin = "none",
  color = "primary",
  customClass = "",
}: TextInputComponentProps) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        label={label}
        variant={variant}
        size={size}
        margin={margin}
        color={color}
        className={customClass}
      />
    </Box>
  );
}
