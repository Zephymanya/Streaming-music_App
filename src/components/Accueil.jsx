import React from "react";
import "./style/accueil.css";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Tout from "./tout";
import { NavLink } from "react-router-dom";

export default function Accueil() {
    return (
        <div>
            <NavBar />
            <div className="accueilAp">
                <div className="sid">
                    <Sidebar />
                </div>

                <div className="contentAccueil">
                    <div className="linBar">
                        <NavLink to={"/Accueil"}>
                            <h1 className="tout">Tout</h1>
                        </NavLink>

                        <NavLink to={"/nouvelle"}>
                            <h1>Nouvelles Chansons</h1>
                        </NavLink>
                    </div>

                    <div className="includ">
                        <Tout />
                    </div>
                </div>
            </div>
        </div>
    );
}
