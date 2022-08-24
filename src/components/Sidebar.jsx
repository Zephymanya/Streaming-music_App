import React, { useContext, useEffect, useState } from "react";
import logo from "../icones/logo ZIiikk.jpg";
import mik from "../icones/Microsoft Groove.png";
import play from "../icones/Playlist.png";
import add from "../icones/Add Song.png";
import menu from "../icones/Menu.png";
import "./style/sidebar.css";
import SpotifyWebApi from "spotify-web-api-js";
import { dataContext } from "./DataContext";

import { NavLink } from "react-router-dom";

const spotify = new SpotifyWebApi();

export default function Sidebar() {
  const { token } = useContext(dataContext);
  spotify.setAccessToken(token);

  const [user, setUser] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    setTimeout(() => {
      spotify.getMe().then(
        function (data) {
          //   console.log("Artist albums", data);
          setUser({
            name: data.display_name,
            image: data.images.length !== 0 ? data.images[0].url : "",
          });
        },
        function (err) {
          console.error(err);
        }
      );
    }, 2000);
  });

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
        <div className="userInfo">
          <img src={user.image} alt="" className="userImg" />
          <h1 className="userName">{user.name} </h1>
          <NavLink to={"/"} className="retour">
            <div className="deconnect">Deconnexion</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
