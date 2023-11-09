import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Button, List, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListItem } from "../../ui/atoms/ListItem/ListItem";
import "./Country.page.scss";

export const CountryPage = () => {
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();

  const fetchCountry = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setCountry(response.data[0]);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }, [name]);

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  const listItems = useMemo(
    () => country.length > 0 && [
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
        value: country.currencies,
      },
      {
        id: 8,
        title: "Languages: ",
        value: country.languages,
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
        <img
          style={{ height: 430, aspectRatio: 7 / 5 }}
          src="https://flagcdn.com/w320/de.png"
          alt="flag"
        />
        <div>
          <Typography className="cardHeader" gutterBottom variant="h4">
            {country.name.common}
          </Typography>
          <List
            sx={{
              ml: 2,
              mt: 2,
              display: "grid",
              gridTemplateRows: "repeat(5, 1fr)",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridAutoFlow: "column",
            }}
          >
            {
              listItems.map((el) => (
                <ListItem
                  key={el.id}
                  title={el.title}
                  value={el.value}
                  style={{ fontSize: "16px" }}
                />
              ))}
          </List>
          <div
            style={{
              marginLeft: "1rem",
              marginTop: "2rem",
              display: " flex",
            }}
          >
            <div>
              <Typography
                style={{
                  whiteSpace: "nowrap",
                  marginRight: "1rem",
                  fontWeight: "bold",
                }}
              >
                Border countries:
              </Typography>
            </div>
            <div>
              {country.borders.map((border, index) => (
                <Button className="borderButton" key={index}>
                  {border}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
