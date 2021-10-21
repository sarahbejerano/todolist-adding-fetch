//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import List from "./component/List.jsx";

import "bootstrap";

import "../styles/index.scss";

ReactDOM.render(<List />, document.querySelector("#app"));
