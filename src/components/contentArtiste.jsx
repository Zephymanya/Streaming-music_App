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

export default function contentArtiste() {
    return (
        <div className="vueDensemble">
            <div className="affChm1">
                <img src={ferre} alt="" className="imag modif" />
                <h2 className="titleH1">Ferre Gola</h2>
            </div>

            <div className="affChm1">
                <img src={hiro} alt="" className="imag modif" />
                <h2 className="titleH1">Gims</h2>
            </div>

            <div className="affChm1">
                <img src={fally} alt="" className="imag modif" />
                <h2 className="titleH1">Fally</h2>
            </div>

            <div className="affChm1">
                <img src={dadju} alt="" className="imag modif" />
                <h2 className="titleH1">Dadju</h2>
            </div>
            <div className="affChm1">
                <img src={gims} alt="" className="imag modif" />
                <h2 className="titleH1">Gims</h2>
            </div>

            <div className="affChm1">
                <img src={mhd} alt="" className="imag modif" />
                <h2 className="titleH1">Maître Gims</h2>
            </div>

            <div className="affChm1">
                <img src={blackM} alt="" className="imag modif" />
                <h2 className="titleH1">BlackM</h2>
            </div>

            <div className="affChm1">
                <img src={mpr} alt="" className="imag modif" />
                <h2 className="titleH1">MPR</h2>
            </div>
        </div>
    );
}
