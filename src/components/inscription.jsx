import React from "react";
import { NavLink } from "react-router-dom";
import "./style/inscription.css";
export default function inscription() {
    return (
        <div className="principe">
            <div className="content">
                <div className="titrage">
                    <NavLink to={"/"}>
                        <h1 className="titrages">Connexion</h1>
                    </NavLink>

                    <h1 className="titrage1">Inscription</h1>
                </div>

                <button className="bton">Aller vers Spotify</button>
            </div>
        </div>
    );
}
