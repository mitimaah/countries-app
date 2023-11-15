import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import React from "react";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate } from "react-router-dom";
import "./AppBar.scss";

export const AppBar = () => {
  const navigate = useNavigate();

  return (
    <MuiAppBar className="muiAppBarr" position="static">
      <Container maxWidth={false} disableGutters>
        <Toolbar disableGutters>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            className="logo"
            component="div"
          >
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
