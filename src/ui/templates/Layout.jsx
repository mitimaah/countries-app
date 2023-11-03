import { Box, Container } from "@mui/material";
import React from "react";
import { AppBar } from "../../ui/index";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container maxWidth={"xl"} disableGutters>
        <Box mt={5}>{children}</Box>
      </Container>
    </>
  );
};
