import SearchIcon from "@mui/icons-material/Search";
import { Box, Input } from "@mui/material";
import React from "react";

export const Searchbar = ({ placeholder, onChange, searchBarWidth }) => {
  return (
    <Box
      sx={{
        borderRadius: "0.3rem",
        padding: "0.5rem",
        background: "hsl(0, 0%, 100%)",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0px 4px 4px rgba(245, 245, 245, 1)",
        width: "25rem",
        ".MuiBox-root": { padding: 0 },
      }}
    >
      <SearchIcon
        sx={{
          height: "1.2rem",
          marginRight: "1rem",
          marginLeft: "1rem",
          color: "hsl(200, 15%, 8%)",
        }}
      />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          width: searchBarWidth,
          color: "hsl(200, 15%, 8%)",
          fontSize: "14px",
        }}
        disableUnderline
      />
    </Box>
  );
};
