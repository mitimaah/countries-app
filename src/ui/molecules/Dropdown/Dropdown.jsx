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

export const Dropdown = ({ children, options, handleChange }) => {
  return (
    <Box className="dropdownContainer">
      <FormControl
        sx={{
          width: 300,
          "& .MuiFormControl-root .Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: 0,
            },
        }}
      >
        <InputLabel sx={{ color: "hsl(200, 15%, 8%)", fontSize: "14px" }}>
          {children}
        </InputLabel>
        <TextField
          sx={{
            boxShadow: "0px 0px 4px 4px rgba(245, 245, 245, 1)",
            background: "hsl(0, 0%, 100%)",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            borderRadius: "0.3rem",
            ".MuiSelect-iconOpen": { transform: "rotate(0deg)" },
            ".MuiSvgIcon-root": {
              fontSize: "20px",
              color: "hsl(200, 15%, 8%)",
            },
          }}
          select
          id="demo-multiple-name"
          value={""}
          onChange={handleChange}
          InputLabelProps={{ shrink: false }}
          SelectProps={{
            IconComponent: ExpandMoreRoundedIcon,
            MenuProps: {
              sx: {
                "& .MuiPaper-root": {
                  marginTop: "0.3rem",
                  boxShadow: "0px 0px 4px 4px rgba(245, 245, 245, 1)",
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
