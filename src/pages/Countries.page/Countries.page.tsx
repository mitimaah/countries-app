import { Grid } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../ui/molecules/Dropdown/Dropdown.tsx";
import { Searchbar } from "../../ui/molecules/Searchbar/SearchBar.tsx";
import { CountryWidget } from "../../ui/organisms/CountryWidget/CountryWidget.tsx";
import "./Countries.page.scss";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export const CountriesPage = () => {
  const navigate = useNavigate();
  const [fetchedCoutries, setFetchedCoutries] = useState<any[]>([]);
  const [displayedCoutries, setDisplayedCoutries] = useState<any[]>([]);
  const [region, setRegion] = useState<string>("");
  const [searchCountry, setSearchCountry] = useState<string>("");
  const [children, setChildren] = useState<string>("Filter by Region");

  const fetchCountries = useCallback(async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setDisplayedCoutries(response.data);
      setFetchedCoutries(response.data);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchCountry(searchTerm);
    const filteredItems = displayedCoutries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedCoutries(filteredItems);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
    setChildren("");
    const filteredCountries = fetchedCoutries.filter(
      (country) => country.region === event.target.value
    );
    setDisplayedCoutries(filteredCountries);
  };

  return (
    <div className="countriesPage">
      <div className="coutriesPageContainer">
        <Searchbar
          placeholder={"Search for a country..."}
          value={searchCountry}
          onChange={handleInputChange}
          searchBarWidth="1pm"
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
