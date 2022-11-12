import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FavoritesContextProvider from "./context/FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
