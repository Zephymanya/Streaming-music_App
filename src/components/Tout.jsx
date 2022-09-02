import React, { useContext, useEffect, useState } from "react";
import "./style/tout.css";
import { dataContext } from "./DataContext";
import SpotifyWebApi from "spotify-web-api-js";
import { NavLink } from "react-router-dom";

const spotify = new SpotifyWebApi();
export default function Tout() {
  const { token, playLecture, setPlayLecture, uri, setUri } =
    useContext(dataContext);
  spotify.setAccessToken(token);

  const [musicNew, setMusicNew] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      spotify.getMyRecentlyPlayedTracks({ limit: 8 }, function (err, data) {
        if (err) console.error(err);
        else {
          console.log(data.items);
          setMusicNew(data.items);
        }
      });
    }, 2000);
  }, []);

  return (
    <div className="ContentMusR">
      <div className="titreDuCont">
        <NavLink to={"/Accueil"}>
          <h1 className="tout">Musiques récentes</h1>
        </NavLink>
      </div>
      <div className="contentRensent">
        {musicNew.map((item) => {
          return (
            <div
              className="affChm1"
              onClick={() => {
                // playLecture();
                setPlayLecture(true);
                setUri(item.track.uri);
              }}
            >
              <img
                src={item.track.album.images[0].url}
                alt=""
                className="imag"
              />
              <h2>{item.track.name} </h2>
              <h2>{item.track.artists[0].name} </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
