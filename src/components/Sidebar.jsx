import React, { useContext, useEffect, useState } from "react";
import home from "../icones/Home.png";
import mik from "../icones/Microsoft Groove.png";
import "./style/sidebar.css";
import SpotifyWebApi from "spotify-web-api-js";
import { dataContext } from "./DataContext";

import { NavLink } from "react-router-dom";

export const spotify = new SpotifyWebApi();

export default function Sidebar() {
  const { token, user } = useContext(dataContext);
  spotify.setAccessToken(token);

  return (
    <div className="contentSide">
      <div className="sidebar">
        <NavLink to={"/Accueil"}>
          <div className="grouveMs">
            <img src={home} alt="" />
            <h1>Accueil</h1>
          </div>
        </NavLink>
        <NavLink to={"/album"}>
          <div className="grouveM">
            <img src={mik} alt="" />
            <h1>Play liste</h1>
          </div>
        </NavLink>
        <div className="userInfo">
          <div className="userGet">
            <img src={user.image} alt="" className="userImg" />
            <h1 className="userName">{user.name} </h1>
          </div>

          <div
            className="deconnect"
            onClick={() => {
              localStorage.clear();
              window.location.replace("/");
            }}
          >
            Deconnexion
          </div>
        </div>
      </div>
    </div>
  );
}
