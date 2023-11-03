import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const CountryWidget = ({ flag, name, population, region, capital }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 250,
        boxShadow: "0px 0px 4px 4px rgba(245, 245, 245, 1)",
      }}
    >
      <CardMedia sx={{ height: 170 }} image={flag} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ ml: 2, fontWeight: "bold", color: "hsl(200, 15%, 8%)" }}
        >
          {name}
        </Typography>
        <List sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline", color: "hsl(200, 15%, 8%)" }}
                    component="span"
                    variant="body2"
                  >
                    Population:
                  </Typography>
                  {` ${population.toLocaleString('en-US')}`}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Region:
                  </Typography>
                  {` ${region}`}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Capital:
                  </Typography>
                  {` ${capital}`}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
