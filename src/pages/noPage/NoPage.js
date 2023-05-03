import React from "react";
import { Link } from "react-router-dom";
//style
import "./NoPage.scss";

function NoPage() {
    return (
        <div className="containerNopage">
            <h1 className="containerNopage__title">Something went wrong!</h1>
            <p>
                Click here to go to {"\n"}
                <Link to="/">Home page.</Link>
            </p>
        </div>
    );
}

export default NoPage;
