import React from "react";
import { render } from "react-dom";
import  {BrowserRouter as Router} from "react-router-dom";

function Hi() {
    return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));
