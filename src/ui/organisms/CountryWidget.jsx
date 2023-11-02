import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const CountryWidget = ({ flag, name, population, region, capital }) => {
  return (
    // <Box className="widgetContainer"></Box>
    <Card
      sx={{
        maxWidth: 400,
        boxShadow: "0px 0px 4px 4px rgba(245, 245, 245, 1)",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={flag} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWe: "bold" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          //   color="text.secondary"
          //   sx={{ size: "14px" }}
        >
          Population: {population}
          Region: {region}
          Capital: {capital}
        </Typography>
      </CardContent>
    </Card>
  );
};
