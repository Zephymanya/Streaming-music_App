import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import ContenAlbum from "./contenAlbum";
export default function Album() {
    return (
        <div>
            <NavBar />
            <div className="accueilAp">
                <div className="sid">
                    <Sidebar />
                </div>

                <div className="contentAccueil">
                    <div className="include">
                        <ContenAlbum />
                    </div>
                </div>
            </div>
        </div>
    );
}
