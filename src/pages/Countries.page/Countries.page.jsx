// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import React from "react";
import data from "../../data.json";
import { Dropdown } from "../../ui/molecules/Dropdown/Dropdown";
import { Searchbar } from "../../ui/molecules/Searchbar/SearchBar";
import { CountryWidget } from "../../ui/organisms/CountryWidget/CountryWidget";
import "./Countries.page.scss";

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
    <div className='countriesPage'>
      <div className="coutriesPageContainer">
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
      </div>
      <Grid className="gridContainer"
        mt={8}
        container 
        rowSpacing={{ xs: 6, sm: 7, md: 8, lg: 10 }}
        columnSpacing={{ xs: 6, sm: 7, md: 8, lg: 10 }}
      >
        {data.map(({ flags, name, population, capital, region }, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountryWidget
              key={index}
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
