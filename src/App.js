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
    redirectUri: "https://streaming-music-app.vercel.app/Accueil",
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
      //   "BQA2YTr6FTbLPL7SuaputBvpUe2yLMS5gSPnZUAqTZcPulMjgZQ4SAnxZJku6cZE0m3vzHyQpCCv_n-t1oaMvIi5JtCeG_S4mcoCdA6qjaTMNikxFz94xtr6nMeg2yauN4tzcwYshCvMoY3LEMa5Z6vSdO2AdZXG0vAr3I2v4P3CzqhwZb5P9jVJnCAsOo03pebl_7BXpgYxmLK-C7Jhtrj_LJ8lX8ttxe5w3XJKFlnstPiBV5G0WTnk8FDS3PtS75GZ2K_DycE";

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
