import React from "react";
import "./style/tout2.css";
import rhiana from "../images/Rhiana.jpg";
import blackM from "../images/blackM.jpg";
import dadju from "../images/dadju.jpg";
import dadju4 from "../images/dadjuR.jpg";
import fally from "../images/fallyAl.jpeg";
import ferre from "../images/ferregola.jpg";
import gims from "../images/Gims.jpg";
import hiro from "../images/hiro.jpg";
import jbTH from "../images/jbTh.jpg";
import mhd from "../images/mhd.jpg";
import mpr from "../images/Mpr.jpg";
import mprMusic from "../images/mprMusic.jpg";
import werra from "../images/werra.jpeg";
import sublim from "../images/subliminal.jpg";

export default function tout() {
    return (
        <div className="vueDensemble">
            <div className="contenaireTabl">
                <table className="TabNouvChansons">
                    <thead>
                        <tr className="titresP">
                            <th></th>
                            <th> </th>
                            <th>Titre</th>
                            <th>Artiste</th>
                            <th>Temps</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="titres">
                            <td>1</td>
                            <td>
                                <img src={rhiana} alt="" />
                            </td>
                            <td>Rehab</td>
                            <td>Rhianna</td>
                            <td>2:45</td>
                        </tr>
                        <tr className="titres">
                            <td>2</td>
                            <td>
                                <img src={rhiana} alt="" />
                            </td>
                            <td>Rehab</td>
                            <td>Rhianna</td>
                            <td>2:45</td>
                        </tr>
                        <tr className="titres">
                            <td>3</td>
                            <td>
                                <img src={rhiana} alt="" />
                            </td>
                            <td>Rehab</td>
                            <td>Rhianna</td>
                            <td>2:45</td>
                        </tr>
                        <tr className="titres">
                            <td>4</td>
                            <td>
                                <img src={rhiana} alt="" />
                            </td>
                            <td>Rehab</td>
                            <td>Rhianna</td>
                            <td>2:45</td>
                        </tr>
                        <tr className="titres">
                            <td>5</td>
                            <td>
                                <img src={rhiana} alt="" />
                            </td>
                            <td>Rehab</td>
                            <td>Rhianna</td>
                            <td>2:45</td>
                        </tr>
                        <tr className="titres">
                            <td>6</td>
                            <td>
                                <img src={rhiana} alt="" />
                            </td>
                            <td>Rehab</td>
                            <td>Rhianna</td>
                            <td>2:45</td>
                        </tr>
                        <tr className="titres">
                            <td>7</td>
                            <td>
                                <img src={rhiana} alt="" />
                            </td>
                            <td>Rehab</td>
                            <td>Rhianna</td>
                            <td>2:45</td>
                        </tr>
                        <tr className="titres">
                            <td>8</td>
                            <td>
                                <img src={rhiana} alt="" />
                            </td>
                            <td>Rehab</td>
                            <td>Rhianna</td>
                            <td>2:45</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
