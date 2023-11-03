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
import "./CountryWidget.scss";

export const CountryWidget = ({ flag, name, population, region, capital }) => {
  return (
    <Card className="widgetCard">
      <CardMedia sx={{ height: 170 }} image={flag} title="green iguana" />
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
          <ListItem disablePadding>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    className="listItemText"
                    component="span"
                    variant="body2"
                  >
                    Population:
                  </Typography>
                  {` ${population.toLocaleString("en-US")}`}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    className="listItemText"
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
                    className="listItemText"
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
