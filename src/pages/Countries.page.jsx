// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import React from "react";
import data from "../data.json";
import { Dropdown } from "../ui/molecules/Dropdown/Dropdown";
import { Searchbar } from "../ui/molecules/SearchBar";
import { CountryWidget } from "../ui/organisms/CountryWidget";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const CountriesPage = () => {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await axios.get("https://restcountries.com/v3.1/all");
  //       setCountries(response.data);
  //     } catch (error) {
  //       console.error("Error fetching todos:", error);
  //     }
  //   };
  //   fetchCountries();
  // }, []);

  // console.log(countries)

  return (
    <div style={{ margin: "0 2rem" }}>
      <div
        style={{
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
          options={regions}
          handleChange={(value) => console.log(value)}
        />
        {/* {countries.map(({ flags, name, continents, capital }, index) => (
        <CountryWidget
          key={index}
          flag={flags.png}
          name={name.common}
          population={name.population}
          region={continents}
          capital={capital}
        />
      ))} */}
        {/* <CountryWidget
        flag={germany.flags.png}
        name={germany.name.common}
        population={germany.name.population}
        region={germany.continents}
        capital={germany.capital}
      /> */}
      </div>
      <Grid
        mt={1}
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 3, md: 10 }}
      >
        {data.map(({ flags, name, population, capital, region }, index) => (
          <Grid item xs={12} sm={6} md={3}>
            <CountryWidget
              flag={flags.png}
              name={name}
              population={population}
              region={region}
              capital={capital}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
