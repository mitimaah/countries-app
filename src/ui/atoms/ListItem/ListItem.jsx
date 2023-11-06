import {
  ListItemText,
  ListItem as MuiListItem,
  Typography,
} from "@mui/material";
import React from "react";
import "./ListItem.scss";

export const ListItem = ({ title, value, style }) => {
  return (
    <MuiListItem disablePadding >
      <ListItemText
        secondary={
          <React.Fragment>
            <Typography
              className="listItemText"
              component="span"
              fontWeight='bold'
              sx={{style}}
            >
              {title}
            </Typography>
            {value}
          </React.Fragment>
        }
      />
    </MuiListItem>
  );
};
