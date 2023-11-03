import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import React from "react";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import "./AppBar.scss";

export const AppBar = () => {
  return (
    <MuiAppBar className="muiAppBarr" position="static">
      <Container maxWidth={false} disableGutters>
        <Toolbar disableGutters>
          <Typography className="logo" component="div">
            Where in the world?
          </Typography>
          <Button
            className="darkModeButton"
            startIcon={<DarkModeOutlinedIcon />}
          >
            Dark mode
          </Button>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
