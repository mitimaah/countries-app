import {
  ListItemText,
  ListItem as MuiListItem,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import "./ListItem.scss";
import { ListItemProps } from "./ListItem.type";

export const ListItem: FC<ListItemProps> = ({ title, value, style }) => {
  return (
    <MuiListItem disablePadding>
      <ListItemText
        secondary={
          <React.Fragment>
            <Typography
              className="listItemText"
              component="span"
              fontWeight="bold"
              sx={{ style }}
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
