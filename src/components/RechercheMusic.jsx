import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useContext, usState } from "react";
import { dataContext } from "./DataContext";

const spotify = new SpotifyWebApi();

export default function RechercheMusic({ recherMusic }) {
  const { token, playLecture, setPlayLecture, uri, setUri } =
    useContext(dataContext);

  return (
    <div className="vueDensemble">
      {recherMusic.map((item) => {
        return (
          <div
            className="affChm1"
            onClick={() => {
              setPlayLecture(true);
              setUri(item.uri);
            }}
          >
            <img src={item.album.images[0].url} alt="" className="imag" />
            <h2>{item.name} </h2>
            <h2>{item.artists[0].name} </h2>
          </div>
        );
      })}
    </div>
  );
}
