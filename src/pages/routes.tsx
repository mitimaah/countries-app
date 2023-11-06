import React from "react";
import { Route, Routes } from "react-router-dom";
import { CountryPage } from "./CountryPage/Country.page";
import { CountriesPage } from "./Countries.page/Countries.page";

interface PathsOpts {
  path: string;
  element: JSX.Element;
}

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

const Paths = () => {

  return <Routes>{paths.map(({ path, element }) => (
      <Route key={path} element={element} path={path} />
    ))}</Routes>;
};
export default Paths;
