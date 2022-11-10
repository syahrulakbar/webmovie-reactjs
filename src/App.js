import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="popular" element={<Popular />}></Route>
        <Route path="favorite" element={<Favorite />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
