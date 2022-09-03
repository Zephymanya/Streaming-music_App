import React, { useEffect, useState } from "react";
import "./style/album.css";
import "./style/tout.css";
import { dataContext } from "./DataContext";
import { useContext } from "react";

import { spotify } from "./Sidebar";

export default function ContenAlbum() {
  const { user } = useContext(dataContext);
  const [playListe, setPlayListe] = useState([]);

  const handleplay = () => {
    spotify.getUserPlaylists(user.userId).then(function (data) {
      setPlayListe(data.items);
    });
  };

  useEffect(() => {
    handleplay();
  }, []);

  return (
    <div>
      {playListe.length !== 0 ? (
        <div className="vueDensemble">
          {playListe.map(
            (item) =>
              item.name && (
                <div className="affChm1">
                  <img src={item.images[0].url} alt="" className="imag" />
                  <h2>{item.name} </h2>
                </div>
              )
          )}
        </div>
      ) : null}
    </div>
  );
}
