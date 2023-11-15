import { Card, CardContent, CardMedia, List, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { ListItem } from "../../atoms/ListItem/ListItem.tsx";
import "./CountryWidget.scss";
import { CountryDetails } from "../../../pages/CountryPage/CountryPage.type.ts";

export const CountryWidget = ({
  flag,
  name,
  population,
  region,
  capital,
  onClick,
}) => {
  const listItems = useMemo<CountryDetails[]>(
    () => [
      {
        id: 1,
        title: "Population: ",
        value: `${population.toLocaleString("en-US")}`,
      },
      {
        id: 2,
        title: "Region: ",
        value: region,
      },
      {
        id: 3,
        title: "Capital: ",
        value: capital,
      },
    ],
    [capital, population, region]
  );

  return (
    <Card className="widgetCard" onClick={onClick}>
      <CardMedia sx={{ height: 170 }} image={flag} title="flag" />
      <CardContent>
        <Typography
          className="cardHeader"
          gutterBottom
          variant="body1"
          component="div"
        >
          {name}
        </Typography>
        <List sx={{ ml: 2 }}>
          {listItems.map((el) => (
            <ListItem
              key={el.id}
              title={el.title}
              value={el.value}
              style={{ fontSize: "14px" }}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
