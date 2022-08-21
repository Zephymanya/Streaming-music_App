import React from "react";
import logo from "../icones/logo ZIiikk.jpg";
import "./style/navbar.css";

export default function NavBar() {
    return (
        <div className="contentP">
            <div className="bar">
                <img src={logo} alt="" className="logo" />
                <h1>2z Musique</h1>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Recherche"
                    className="cherche"
                />
            </div>
        </div>
    );
}
