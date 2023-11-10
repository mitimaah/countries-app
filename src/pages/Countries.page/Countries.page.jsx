import { Grid } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../ui/molecules/Dropdown/Dropdown";
import { Searchbar } from "../../ui/molecules/Searchbar/SearchBar";
import { CountryWidget } from "../../ui/organisms/CountryWidget/CountryWidget";
import "./Countries.page.scss";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export const CountriesPage = () => {
  const navigate = useNavigate();
  const [displayedCoutries, setDisplayedCoutries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [children, setChildren] = useState("Filter by Region");

  const fetchCountries = useCallback(async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setDisplayedCoutries(response.data);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }, []);

useEffect(() => {
  fetchCountries();
}, [fetchCountries]);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchCountry(searchTerm);
    const filteredItems = displayedCoutries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedCoutries(filteredItems);
  };

  const handleSelectChange = useCallback((event) => {
    console.log(region, displayedCoutries);
    setRegion(event.target.value);
    setChildren("");
    const filteredCountries = displayedCoutries.filter(
      (country) => country.region === region
    );
    setDisplayedCoutries(filteredCountries);
  }, [region, displayedCoutries]);

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
          handleChange={handleSelectChange}
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
          ({ flags, name, population, capital, region }) => (
            <Grid key={name.common} item xs={12} sm={6} md={4} lg={3}>
              <CountryWidget
                onClick={() => navigate(`/name/${name.common}`)}
                flag={flags.svg}
                name={name.common}
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
