import { Container } from "@mui/material";
import React from "react";
import { Dropdown } from "../ui/molecules/Dropdown/Dropdown";
import { Searchbar } from "../ui/molecules/SearchBar";

const options = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
];

export const CountriesPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Searchbar
        placeholder={"Search for a country..."}
        onChange={() => {}}
        searchBarWidth={"1pm"}
      />
      <Dropdown
        children={"Filter by Region"}
        options={options}
        handleChange={(value) => console.log(value)}
      />
    </Container>
  );
};
