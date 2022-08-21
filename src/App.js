import { useEffect, useState } from "react";
import Connexion from "./components/connexion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./components/inscription";
import Accueil from "./components/Accueil";
import Album from "./components/Album";
import Artiste from "./components/artiste";
import Chanson from "./components/Chansons";
import Tout from "./components/tout";
import Nouvelle from "./components/nouvelle";
import { getTokenFromUrl } from "./components/spotify";

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token) setToken(token);
        console.log("This is a token", _token);
    }, []);

    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Connexion />} />
                        <Route
                            exact
                            path="/inscription"
                            element={<Inscription />}
                        />
                        {token ? (
                            <Route
                                exact
                                path="/Accueil"
                                element={<Accueil />}
                            />
                        ) : (
                            <Route exact path="/" element={<Connexion />} />
                        )}

                        <Route exact path="/Nouvelle" element={<Nouvelle />} />
                        <Route exact path="/album" element={<Album />}></Route>
                        <Route
                            exact
                            path="/artiste"
                            element={<Artiste />}
                        ></Route>
                        <Route
                            exact
                            path="/Chanson"
                            element={<Chanson />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
