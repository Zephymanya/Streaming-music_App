import React from "react";
import { useState } from "react";
import "./style/accueil.css";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Tout from "./Tout";
import PlayBack from "./playBack";
import RechercheMusic from "./RechercheMusic";

export default function Accueil() {
  const [recherMusic, setRecherMusic] = useState([]);
  const [checkSearch, setCheckSearch] = useState(false);

  return (
    <div>
      <div className="navbar">
        <NavBar
          setRecherMusic={setRecherMusic}
          setCheckSearch={setCheckSearch}
        />
      </div>
      <div className="accueilAp">
        <div className="sid">
          <Sidebar />
        </div>

        <div className="contentAccueil">
          <div className="includ">
            {checkSearch ? (
              <RechercheMusic recherMusic={recherMusic} />
            ) : (
              <Tout />
            )}
          </div>
        </div>
      </div>

      <div className="playBack">
        <PlayBack />
      </div>
    </div>
  );
}
