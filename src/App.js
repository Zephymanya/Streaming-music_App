import Connexion from "./components/Connexion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Album from "./components/Album";
import Artiste from "./components/Artiste";
import Chanson from "./components/Chansons";
import Nouvelle from "./components/nouvelle";
import RechercheMusic from "./components/RechercheMusic";
import { dataContext } from "./components/DataContext";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");

  const [playLecture, setPlayLecture] = useState(false);
  const [uri, setUri] = useState("");

  const valeurAthentic = {
    idClient: "3279a6db55dd434cb860bd9c44321ec7",
    redirectUri: "https://2z-music.netlify.app/Accueil",
    apiUrl: "https://accounts.spotify.com/authorize",
    response: "token",
  };

  const scopes = [
    "user-read-email",
    "user-read-private",
    "user-library-modify",
    "user-library-read",
    "app-remote-control",
    "streaming",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
    "user-follow-modify",
    "user-follow-read",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
  ];

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (hash) {
      // token = hash
      //   .substring(1)
      //   .split("&")
      //   .find((element) => element.startsWith("access_token"))
      //   .split("=")[1];
      token =
        "BQC6sua8ANzrqFprccrMalEwYDvWxoB-baBImSv0jCOZxnhPzAD_Zvw-KsZvdZnyClfsI9m3dqmC6iEjsw5C2dn-Y0evWTW4roi8KtgOfCCPRV_8HjJTq-ZG9H7In-u8CoDC2HV5c1GCFXNwbqj0lUVyHUXAO45WFbpc6NG4ULPAmPBU_kjx4XmwdNLJtp_Srfq6lRraCbqgSY4Ve3b8VWEonmY9ypUjFpU1zTRaWrjxZ_PyTmcEVOruO3ldalsMAmQ0S65DZsv_p1ubcRfUlzYUstU_pRKNvXv4im3hxzifXNTrvAoY_98sZTBt_2xJaP3hBjcoK0FIP5P2m-M";

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  return (
    <div>
      <dataContext.Provider
        value={{
          scopes,
          valeurAthentic,
          token,
          playLecture,
          setPlayLecture,
          uri,
          setUri,
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Connexion />} />
            <Route exact path="/Accueil" element={<Accueil />} />
            <Route exact path="/Album" element={<Album />} />
            <Route exact path="/Artiste" element={<Artiste />} />
            <Route exact path="/Chanson" element={<Chanson />} />
            <Route exact path="/Nouvelle" element={<Nouvelle />} />
          </Routes>
        </Router>
      </dataContext.Provider>
    </div>
  );
}

export default App;
