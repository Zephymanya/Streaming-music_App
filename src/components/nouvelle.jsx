import React from "react";
import "./style/accueil.css";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Tout2 from "./Tout2";
import { NavLink } from "react-router-dom";

export default function nouvelle() {
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
                            <h1>Tout</h1>
                        </NavLink>

                        <NavLink to={"/nouvelle"}>
                            <h1 className="nouv">Nouvelles Chansons</h1>
                        </NavLink>
                    </div>

                    <div className="include">
                        <Tout2 />
                    </div>
                </div>
            </div>
        </div>
    );
}
