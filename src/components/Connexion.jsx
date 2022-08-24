import React from "react";
import "../components/style/connexion.css";
import logp from "../icones/logo ZIiikk.jpg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "./DataContext";

export default function Connexion() {
  const { scopes, valeurAthentic } = useContext(dataContext);
  console.log(scopes);

  return (
    <div className="principe">
      <div className="contenaire">
        <div className="mouvLogo">
          <img src={logp} alt="" className="logoMouv" />
        </div>

        <div className="titrage">
          <h1 className="titre1">Bienvenue</h1>
        </div>
        <div className="btnConnect">
          <a
            href={`${valeurAthentic.apiUrl}?client_id=${
              valeurAthentic.idClient
            }&scope=${scopes.join("%20")}&redirect_uri=${
              valeurAthentic.redirectUri
            }&response_type=${valeurAthentic.response}&show_daialog=true `}
            className="btnCon"
          >
            Se connecter
          </a>
        </div>
      </div>
    </div>
  );
}
