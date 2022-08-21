import React from "react";
import logo from "../icones/logo ZIiikk.jpg";
import mik from "../icones/Microsoft Groove.png";
import play from "../icones/Playlist.png";
import add from "../icones/Add Song.png";
import menu from "../icones/Menu.png";
import "./style/sidebar.css";
// import Album from "./Album";
// import Artiste from "./artiste";
// import Chanson from "./Chansons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="contentSide">
            <div className="sidebar">
                <div className="sectionPrinc">
                    <div className="champP">
                        <NavLink to={"/Accueil"} className="champP">
                            <img src={logo} alt="" className="logoZ" />
                            <h1>Accueil</h1>
                        </NavLink>
                    </div>
                    <img src={menu} alt="" className="menuM" />
                </div>

                <NavLink to={"/album"}>
                    <div className="grouveMs">
                        <img src={mik} alt="" />
                        <h1>Album</h1>
                    </div>
                </NavLink>

                <NavLink to={"/artiste"}>
                    <div className="artiste">
                        <img src={play} alt="" />
                        <h1>Artistes</h1>
                    </div>
                </NavLink>

                <div className="chansons">
                    <img src={add} alt="" />
                    <h1>Chansons</h1>
                </div>
            </div>
        </div>
    );
}
