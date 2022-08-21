import React from "react";
import "../components/style/connexion.css";
import logp from "../icones/logo ZIiikk.jpg";
import { NavLink } from "react-router-dom";
import { loginUrl } from "./spotify";

export default function connexion() {
    return (
        <div className="principe">
            <div className="contenaire">
                <div className="mouvLogo">
                    <img src={logp} alt="" className="logoMouv" />
                </div>

                <div className="titrage">
                    <h1 className="titre1">Bienvenue</h1>
                </div>
                <div className="champs">
                    <button className="btn">
                        <a href={loginUrl}> Se connecter</a>
                    </button>
                </div>
            </div>
        </div>
    );
}
