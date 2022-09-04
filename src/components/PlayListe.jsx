import React from "react";
import clock from "../icones/Clock.png";
import zephy from "../images/zephyManya.jpg";
import "./style/album.css";

export default function PlayListe() {
  return (
    <div className="ContentTableau">
      <table>
        <tr className="colone">
          <th>#</th>
          <th className="th1">Titre</th>
          <th className="th2">Album</th>
          <th className="th3">{"clock"} </th>
        </tr>
        <tr className="ligne">
          <td>1</td>

          <td className="td1">
            {" "}
            <img src={zephy} alt="" className="imageTab" />
            Aime moi demain(feat.gradure)
          </td>
          <td className="td2">Indéfini</td>
          <td className="td3">3:23</td>
        </tr>
        <tr className="ligne">
          <td>2</td>

          <td className="td1">
            {" "}
            <img src={zephy} alt="" className="imageTab" />
            Aime moi demain(feat.gradure)
          </td>
          <td className="td2">Indéfini</td>
          <td className="td3">3:23</td>
        </tr>
      </table>
    </div>
  );
}
