import { Grid } from "@mui/material";
import React, { useState } from "react";
import data from "../../data.json";
import { Dropdown } from "../../ui/molecules/Dropdown/Dropdown";
import { Searchbar } from "../../ui/molecules/Searchbar/SearchBar";
import { CountryWidget } from "../../ui/organisms/CountryWidget/CountryWidget";
import "./Countries.page.scss";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const CountriesPage = () => {
  const [displayedCoutries, setDisplayedCoutries] = useState(data);
  const [region, setRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [children, setChildren] = useState("Filter by Region");

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchCountry(searchTerm);

    const filteredItems = data.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedCoutries(filteredItems);
  };

  const handleChange = (event) => {
    setRegion(event.target.value);
    setChildren("");
    const filteredCountries = displayedCoutries.filter(
      (country) => country.region === region
    );
    setDisplayedCoutries(filteredCountries);
  };
  console.log(region, displayedCoutries);

  return (
    <div className="countriesPage">
      <div className="coutriesPageContainer">
        <Searchbar
          placeholder={"Search for a country..."}
          value={searchCountry}
          onChange={handleInputChange}
          searchBarWidth={"1pm"}
        />
        <Dropdown
          children={children}
          options={REGIONS}
          region={region}
          handleChange={handleChange}
        />
      </div>
      <Grid
        className="gridContainer"
        mt={8}
        container
        rowSpacing={{ xs: 6, sm: 7, md: 8, lg: 10 }}
        columnSpacing={{ xs: 6, sm: 7, md: 8, lg: 10 }}
      >
        {displayedCoutries.map(
          ({ flags, name, population, capital, region }, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <CountryWidget
                flag={flags.png}
                name={name}
                population={population}
                region={region}
                capital={capital}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};
