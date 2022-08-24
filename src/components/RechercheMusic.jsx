import React from "react";

export default function RechercheMusic({ recherMusic }) {
  return (
    <div className="vueDensemble">
      {recherMusic.map((item) => {
        return (
          <div className="affChm1">
            <img src={item.album.images[0].url} alt="" className="imag" />
            <h2>{item.name} </h2>
            <h2>{item.artists[0].name} </h2>
          </div>
        );
      })}
    </div>
  );
}
