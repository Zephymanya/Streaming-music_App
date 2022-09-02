import Connexion from "./components/Connexion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Accueil from "./components/Accueil";
import Album from "./components/Album";
import Artiste from "./components/Artiste";
import { dataContext } from "./components/DataContext";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [playLecture, setPlayLecture] = useState(false);
  const [uri, setUri] = useState("");

  const valeurAthentic = {
    idClient: "3279a6db55dd434cb860bd9c44321ec7",
    redirectUri: "http://localhost:3000/Accueil",
    apiUrl: "https://accounts.spotify.com/authorize",
    response: "token",
  };
  // http://localhost:3000/Accueil
  // https://streaming-music-app.vercel.app/Accueil#
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
      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        .split("=")[1];
      // token =
      //   "BQAVNV_5ATD9mrrAPXBZMDVu23PQo9xZ5zf1o-68HSPX6fJPI6MlMaXb6Kr6M875eOyBdZIoem1bDmQRthSsmmAXviqTdP95qpgl_O3o4A050k4zgsEXonGyYtwbXv7WQvKa3XUyr05UjtFhF6zNii2PLow3sg3DPgx4EYAIwVfipZM4Slg2KURs7UKwjpr6w0nh5MntNPpGSZFY80lITAMB5Qi0uA386GRvtQeG8dyMOjoc1zBGahqH8cw1b9k5pee0HvOp36k";

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  let userToken = window.localStorage.getItem("token");

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
            {!userToken ? (
              <>
                <Route exact path="/" element={<Connexion />} />
                <Route
                  path="/*"
                  element={
                    userToken ? <Navigate replace to="/" /> : <Connexion />
                  }
                />
              </>
            ) : (
              <>
                <Route exact path="/" element={<Connexion />} />
                <Route exact path="/Accueil" element={<Accueil />} />
                <Route exact path="/Album" element={<Album />} />
                <Route exact path="/Artiste" element={<Artiste />} />
              </>
            )}
          </Routes>
        </Router>
      </dataContext.Provider>
    </div>
  );
}

export default App;
