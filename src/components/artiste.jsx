import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import ContentArtiste from "./contentArtiste";

export default function artiste() {
    return (
        <div>
            <NavBar />
            <div className="accueilAp">
                <div className="sid">
                    <Sidebar />
                </div>

                <div className="contentAccueil">
                    <div className="include">
                        <ContentArtiste />
                    </div>
                </div>
            </div>
        </div>
    );
}
