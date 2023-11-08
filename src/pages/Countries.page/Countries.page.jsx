import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../ui/molecules/Dropdown/Dropdown";
import { Searchbar } from "../../ui/molecules/Searchbar/SearchBar";
import { CountryWidget } from "../../ui/organisms/CountryWidget/CountryWidget";
import "./Countries.page.scss";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const CountriesPage = () => {
  const navigate = useNavigate();
  const [displayedCoutries, setDisplayedCoutries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [children, setChildren] = useState("Filter by Region");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setDisplayedCoutries(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchCountry(searchTerm);
    const filteredItems = displayedCoutries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedCoutries(filteredItems);
  };

  const handleSelectChange = (event) => {
    console.log(region, displayedCoutries);
    setRegion(event.target.value);
    setChildren("");
    const filteredCountries = displayedCoutries.filter(
      (country) => country.region === region
    );
    setDisplayedCoutries(filteredCountries);
  };

  console.log(displayedCoutries);

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
          ({ flags, name, population, capital, region }, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <CountryWidget
                onClick={() => navigate(`/name/${name}`)}
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
