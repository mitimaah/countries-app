import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import "./Dropdown.scss";
import { DropdownProps } from "./Dropdown.type";

export const Dropdown = ({
  children,
  options,
  handleChange,
  region,
}: DropdownProps) => {
  return (
    <Box className="dropdownContainer">
      <FormControl
        sx={{
          width: 300,
        }}
      >
        <InputLabel className="inputLabel">{children}</InputLabel>
        <TextField
          className="select"
          select
          id="multiple-region"
          value={region}
          onChange={handleChange}
          InputLabelProps={{ shrink: false }}
          SelectProps={{
            IconComponent: ExpandMoreRoundedIcon,
            MenuProps: {
              sx: {
                "& .MuiPaper-root": {
                  marginTop: "0.3rem",
                  boxShadow: "0px 0px 4px 4px rgba(240, 240, 240, 1)",
                },
              },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Box>
  );
};
