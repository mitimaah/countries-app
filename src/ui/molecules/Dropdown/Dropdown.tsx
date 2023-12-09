import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import style from "./Dropdown.module.scss";
import { DropdownProps } from "./Dropdown.type";

export const Dropdown = ({
  label,
  options,
  handleChange,
  region,
}: DropdownProps) => {
  return (
    <Box className={style.dropdownContainer}>
      <FormControl
        sx={{
          width: 300,
          "& .MuiFormControl-root .Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: 0,
            },
        }}
      >
        <InputLabel className={style.inputLabel}>{label}</InputLabel>
        <TextField
          sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
          className={style.select}
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
