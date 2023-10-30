import React from "react";
import { Route, Routes } from "react-router-dom";
import { CountriesPage } from "./Countries.page";
import { CountryPage } from "./Country.page";

interface PathsOpts {
  path: string;
  element: JSX.Element;
}

const Paths = () => {
  const generatePaths: () => any[] = () => {
    const paths: PathsOpts[] = [
      {
        path: "/",
        element: <CountriesPage />,
      },
      {
        path: "/:id",
        element: <CountryPage />,
      },
    ];

    return paths.map(({ path, element }, index) => (
      <Route key={index} element={element} path={path} />
    ));
  };
  return <Routes>{generatePaths()}</Routes>;
};
export default Paths;
