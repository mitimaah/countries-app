import { Button, Container, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import React from "react";

export const AppBar = () => {
  return (
    <MuiAppBar
      style={{
        background: "hsl(0, 0%, 100%)",
        boxShadow: "0px 0px 8px 4px rgba(240, 240, 240, 1)",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            color="hsl(200, 15%, 8%)"
            fontWeight="bold"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Where in the world?
          </Typography>
          <Button style={{ color: "hsl(200, 15%, 8%)" }}>Dark mode</Button>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
