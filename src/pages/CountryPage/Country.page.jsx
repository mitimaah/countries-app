import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Button, List, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";
import { ListItem } from "../../ui/atoms/ListItem/ListItem";
import "./Country.page.scss";

export const CountryPage = () => {
  const navigate = useNavigate();

  const country = data[84];
  console.log(country);

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
        startIcon={
          <KeyboardBackspaceRoundedIcon style={{ transform: "scale(1.2)" }} />
        }
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <div className="coutryPageContainer">
        <img className="flag"
          src="https://flagcdn.com/w320/de.png"
          alt="flag"
        />
        <div>
          <Typography className="countryName" gutterBottom>
            {country.name}
          </Typography>
          <List className="list">
            {listItems.map((el) => (
              <ListItem
                key={el.id}
                title={el.title}
                value={el.value}
                style={{ fontSize: "16px" }}
              />
            ))}
          </List>
          <div className="bordersContainer">
            <div className="borderCountriesTitle">
              <Typography sx={{fontWeight: 'bold'}}>Border countries:</Typography>
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
