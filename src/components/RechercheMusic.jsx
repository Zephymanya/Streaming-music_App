import React from "react";
import "./style/recherche.css";
import { useContext, usState } from "react";
import { dataContext } from "./DataContext";

export default function RechercheMusic({ recherMusic }) {
  const { token, playLecture, setPlayLecture, uri, setUri } =
    useContext(dataContext);

  return (
    <div className="contentRecherche">
      {recherMusic.map((item) => {
        return (
          <div
            className="resultRecherche"
            onClick={() => {
              setPlayLecture(true);
              setUri(item.uri);
            }}
          >
            <div className="contenaireMap">
              <img
                src={item.album.images[0].url}
                alt=""
                className="imageRech"
              />
              <div className="titreRecherche">
                <h2 className="titreName">
                  <span>{item.name} </span>{" "}
                </h2>
                <h2 className="titreArt">{item.artists[0].name} </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
