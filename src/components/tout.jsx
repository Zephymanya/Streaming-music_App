import React from "react";
import "./style/tout.css";
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
            <div className="affChm1">
                <img src={rhiana} alt="" className="imag" />
                <h2>Rehab</h2>
            </div>

            <div className="affChm1">
                <img src={hiro} alt="" className="imag" />
                <h2>De la haine à l'amour</h2>
            </div>

            <div className="affChm1">
                <img src={dadju4} alt="" className="imag" />
                <h2>Gentleman 2.0</h2>
            </div>

            <div className="affChm1">
                <img src={dadju} alt="" className="imag" />
                <h2>Dadju</h2>
            </div>
            <div className="affChm1">
                <img src={gims} alt="" className="imag" />
                <h2>Ceinture noire</h2>
            </div>

            <div className="affChm1">
                <img src={sublim} alt="" className="imag" />
                <h2>Subliminal</h2>
            </div>

            <div className="affChm1">
                <img src={blackM} alt="" className="imag" />
                <h2>La nuit porte conseil</h2>
            </div>

            <div className="affChm1">
                <img src={mpr} alt="" className="imag" />
                <h2>Seseko</h2>
            </div>
        </div>
    );
}
