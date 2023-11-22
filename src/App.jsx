import "./App.scss";
import Logo from "./assets/desktop/logo.svg";
import Spotify from "./assets/desktop/spotify.svg";
import Apple from "./assets/desktop/apple-podcast.svg";
import Google from "./assets/desktop/google-podcasts.svg";
import Pocket from "./assets/desktop/pocket-casts.svg";

function App() {
    return (
        <main>
            <div className="container">
                <img src={Logo} alt="" />
                <div className="card">
                    <h1>
                        Publish your podcasts <br />
                        <span>everywhere</span>
                    </h1>
                    <p>
                        Upload your audio to Pod with a single click. We’ll then
                        distribute your podcast to Spotify, Apple Podcasts,
                        Google Podcasts, Pocket Casts and more!
                    </p>
                    <div className="input">
                        <input type="text" />
                        <button>Request Access</button>
                    </div>
                    <div className="plataforms">
                        <img src={Spotify} alt="" />
                        <img src={Apple} alt="" />
                        <img src={Google} alt="" />
                        <img src={Pocket} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
