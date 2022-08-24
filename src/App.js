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
    idClient: "30f33f24818d4be79f45ef5e59474569",
    redirectUri: "http://localhost:3000/Accueil",
    apiUrl: "https://accounts.spotify.com/authorize",
    response: "token",
  };

  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-modify-private",
    "playlist-modify-public",
    "playlist-read-collaborative",
    "user-read-private",
    "user-read-email",
    "user-library-read",
    "user-library-modify",
    "streaming",
  ];

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        .split("=")[1];

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
