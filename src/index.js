import React from "react";
import reactDom from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "bulma/css/bulma.css";


reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root"));