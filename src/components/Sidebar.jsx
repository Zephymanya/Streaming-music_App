import React, { useContext, useEffect, useState } from "react";
import home from "../icones/Home.png";
import mik from "../icones/Microsoft Groove.png";
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
              <img src={home} alt="" className="logoZ" />
              <h1>Accueil</h1>
            </NavLink>
          </div>
        </div>
        <NavLink to={"/album"}>
          <div className="grouveMs">
            <img src={mik} alt="" />
            <h1>Album</h1>
          </div>
        </NavLink>
        <div className="userInfo">
          <img src={user.image} alt="" className="userImg" />
          <h1 className="userName">{user.name} </h1>

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
