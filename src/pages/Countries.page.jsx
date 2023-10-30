import { Container } from "@mui/material";
import React from "react";
import { Searchbar } from "../ui/molecules/SearchBar";
import { SelectBar } from "../ui/molecules/SelectBar";

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
     </Container>
  );
};
