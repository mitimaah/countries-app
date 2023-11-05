import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Button, List, Typography } from "@mui/material";
import React from "react";
import data from "../../data.json";
import { ListItem } from "../../ui/atoms/ListItem/ListItem";
import "./Country.page.scss";

export const CountryPage = () => {
  const country = data[84];

  const listItems = [
    {
      id: 1,
      title: "Native name: ",
      value: country.nativeName,
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
      value: country.capital,
    },
    {
      id: 6,
      title: "Top level domain: ",
      value: country.topLevelDomain,
      // style: { flex: 1, flexBasis: '25%' },
    },
    {
      id: 7,
      title: "Currencies: ",
      value: country.currencies[0].name,
    },
    {
      id: 8,
      title: "Languages: ",
      value: country.languages[0].name,
    },
  ];

  return (
    <div className="countryPage">
      <Button
        className="goBackButton"
        startIcon={<KeyboardBackspaceRoundedIcon />}
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
            {country.name}
          </Typography>
          <List
            sx={{
              maxHeight: 200,
              ml: 2,
              mt: 2,
              display: "grid",
              // flexWrap: "wrap",
              // gridTemplateColumns: "1fr 1fr",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {listItems.map((el) => (
              <ListItem
                key={el.id}
                title={el.title}
                value={el.value}
                style={el.style}
                // style={{ fontSize: "16px", flexBasis: "50%" }}
              />
            ))}
          </List>
          <div
            style={{
              marginLeft: "1rem",
              marginTop: "2rem",
              display: " flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", display: "inline" }}>
              Border countries:
            </Typography>
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
