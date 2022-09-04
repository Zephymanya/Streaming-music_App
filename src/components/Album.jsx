import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import ContenAlbum from "./contenAlbum";
import { dataContext } from "./DataContext";
import { useContext } from "react";
import PlayBack from "./playBack";
import "./style/album.css";

export default function Album() {
  const { user } = useContext(dataContext);
  console.log(user.userId);

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
      <div className="playback">
        <PlayBack />
      </div>
    </div>
  );
}
