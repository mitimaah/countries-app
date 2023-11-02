import React from "react";
import "./App.scss";
import Paths from "./pages/routes.tsx";
import { Layout } from "./ui";

function App() {
  return (
    <div className="App">
      <Layout>
        <Paths />
      </Layout>
    </div>
  );
}

export default App;
