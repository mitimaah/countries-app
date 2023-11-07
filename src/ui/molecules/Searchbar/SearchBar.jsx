import SearchIcon from "@mui/icons-material/Search";
import { Box, Input } from "@mui/material";
import React from "react";
import "./Searchbar.scss";

export const Searchbar = ({ placeholder, value, onChange, searchBarWidth }) => {
  return (
    <Box className="searchbarContainer">
      <SearchIcon className="searchIcon" />
      <Input
        className="searchInput"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          width: searchBarWidth,
        }}
        disableUnderline
      />
    </Box>
  );
};
