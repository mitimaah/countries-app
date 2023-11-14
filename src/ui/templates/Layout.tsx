import { Box, Container } from "@mui/material";
import React from "react";
import { AppBar } from "../organisms/AppBar/AppBar.tsx";

export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <AppBar />
      <Container maxWidth={"xl"} disableGutters>
        <Box mt={5}>{children}</Box>
      </Container>
    </>
  );
};
