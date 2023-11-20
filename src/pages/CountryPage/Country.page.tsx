import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Button, List, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListItem } from "../../ui/atoms/ListItem/ListItem.tsx";
import { CountriesList } from "../Countries.page/CountriesPage.type.ts";
import "./Country.page.scss";
import { CountryDetails } from "./CountryPage.type.ts";

export const CountryPage = () => {
  const [country, setCountry] = useState<CountriesList | null>(null);
  const navigate = useNavigate();
  const { name } = useParams();

  const fetchCountry = useCallback(
    async ({ signal }) => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`,
          { signal }
        );
        setCountry(response.data[0]);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch aborted:", error);
        } else {
          console.error("Error fetching:", error);
        }
      }
    },
    [name]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchCountry({ signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, [fetchCountry]);
  
  const listItems: boolean | CountryDetails[] = useMemo(
    () =>
      country !== null && [
        {
          id: 1,
          title: "Native name: ",
          value: country.name.common,
        },
        {
          id: 2,
          title: "Population: ",
          value: `${country.population.toLocaleString("en-US")}`,
        },
        {
          id: 3,
          title: "Region: ",
          value: country.region,
        },
        {
          id: 4,
          title: "Sub region: ",
          value: country.subregion,
        },
        {
          id: 5,
          title: "Capital: ",
          value: country.capital[0],
        },
        {
          id: 6,
          title: "Top level domain: ",
          value: country.tld[0],
        },
        {
          id: 7,
          title: "Currencies: ",
          value: Object?.values(country.currencies)[0].name,
        },
        {
          id: 8,
          title: "Languages: ",
          value: Object?.values(country.languages).join(", "),
        },
      ],
    [country]
  );

  return (
    <div className="countryPage">
      <Button
        className="goBackButton"
        startIcon={
          <KeyboardBackspaceRoundedIcon style={{ transform: "scale(1.2)" }} />
        }
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <div className="coutryPageContainer">
        <img className="flag" src={country?.flags?.svg} alt="flag" />
        <div>
          <Typography className="countryName" gutterBottom>
            {country?.name?.common}
          </Typography>
          <List className="list">
            {listItems &&
              listItems.map((el) => (
                <ListItem
                  key={el.id}
                  title={el.title}
                  value={el.value}
                  style={{ fontSize: "16px" }}
                />
              ))}
          </List>
          {country?.borders && (
            <div className="bordersContainer">
              <div className="borderCountriesTitle">
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Border countries:
                </Typography>
              </div>
              <div>
                {country?.borders?.map((border, index) => (
                  <Button className="borderButton" key={index}>
                    {border}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
