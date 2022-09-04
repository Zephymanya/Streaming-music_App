import Connexion from "./components/Connexion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Accueil from "./components/Accueil";
import Album from "./components/Album";
// import Artiste from "./components/Artiste";
import { dataContext } from "./components/DataContext";
import { useEffect, useState } from "react";
import { spotify } from "./components/Sidebar";

function App() {
  const [token, setToken] = useState("");
  const [playLecture, setPlayLecture] = useState(false);
  const [uri, setUri] = useState("");
  const [user, setUser] = useState({
    userId: "",
    name: "",
    image: "",
  });

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
      //   "BQBj3xVv9wZSk77mnZ-u0iPsZrqYJ6Mhb18ophIDEHE_7jhhfFUYtsETPpvkwjOnJ4fYt6myR13xLx1esF03UKGyBUJBIIdUKTpFa94obajkqfX7tDxZOD1opuglslaBZyTOYbK6B4LzGQWOC7bSpjQi7gk80ZyMM0HWdnJUbn06hbKkvXkQQVgnYe0wlp6fdQxDamDESMv1JAeT9nWdcaw2W-vQ3QDsJLngGyH56hBNpSjOEQfEVjUvwFwbaBRh78rd8Ilufyo";

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  let userToken = window.localStorage.getItem("token");

  useEffect(() => {
    setTimeout(() => {
      spotify.getMe().then(
        function (data) {
          setUser({
            userId: data.id,
            name: data.display_name,
            image: data.images.length !== 0 ? data.images[0].url : "",
          });
        },
        function (err) {
          console.error(err);
        }
      );
    }, 2000);
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
          user,
          setUser,
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
                {/* <Route exact path="/Artiste" element={<Artiste />} /> */}
              </>
            )}
          </Routes>
        </Router>
      </dataContext.Provider>
    </div>
  );
}

export default App;
