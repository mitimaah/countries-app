import React from "react";
import { Route, Routes } from "react-router-dom";
import { CountriesPage } from "./Countries.page/Countries.page.tsx";
import { CountryPage } from "./CountryPage/Country.page.tsx";

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
    path: "/name/:name",
    element: <CountryPage />,
  },
];

const Paths = () => {
  return (
    <Routes>
      {paths.map(({ path, element }) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  );
};
export default Paths;
