import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* all the links should go here and they should look like this
        <Route path="/showHide" element={<ShowHide />} />
        */}
      </Route>
      <Route
        // default for when the link is wrong
        // like this http://localhost:3000/hjklhjklh
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1 className="backLinkH2">There's nothing here!</h1>
            <p className="backLink">
              <a href="/">To go back click here!</a>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
