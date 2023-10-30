import { Box, Container } from "@mui/material";
import React from "react";
import { AppBar } from "../../ui/index";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container maxWidth={"xl"} sx={{ paddingBottom: 6 }}>
        <Box mt={6}>{children}</Box>
      </Container>
    </>
  );
};
