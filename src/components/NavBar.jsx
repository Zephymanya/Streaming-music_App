import React, { useContext, useState } from "react";
import logo from "../icones/logo ZIiikk.jpg";
import "./style/navbar.css";
import { dataContext } from "./DataContext";
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi();
export default function NavBar({ setRecherMusic, setCheckSearch }) {
  const { token } = useContext(dataContext);

  console.log("TOKE", token);

  function trackSearch(e) {
    spotify.searchTracks(e.target.value, function (err, data) {
      if (err) console.error(err);
      else {
        console.log(data);
        setRecherMusic(data.tracks.items);
      }
    });
    if (e.target.value.legnth !== 0) setCheckSearch(true);
    else setCheckSearch(false);
    console.log("BONJOUR");
  }

  return (
    <div className="contentP">
      <div className="bar">
        <img src={logo} alt="" className="logo" />
        <h1>2z Musique</h1>
      </div>
      <div>
        <input
          type="search"
          placeholder="Recherche"
          className="cherche"
          onChange={trackSearch}
        />
      </div>
    </div>
  );
}
