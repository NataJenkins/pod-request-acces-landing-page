import "./App.scss";
import Logo from "./assets/desktop/logo.svg";
import Spotify from "./assets/desktop/spotify.svg";
import Apple from "./assets/desktop/apple-podcast.svg";
import Google from "./assets/desktop/google-podcasts.svg";
import Pocket from "./assets/desktop/pocket-casts.svg";
import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        email: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            errors.email = "Oops! Please check your email";
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form submitted:", formData);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: "",
        });
    };

    return (
        <main>
            <div className="container">
                <img src={Logo} alt="" className="logo" />
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
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                className={
                                    formErrors.email ? "error" : undefined
                                }
                            />
                            {formErrors.email && (
                                <>
                                    <p className="error-span">
                                        {formErrors.email}
                                    </p>
                                </>
                            )}
                            <button type="submit" id="submit" title="submit">
                                Request Access
                            </button>
                        </div>
                    </form>
                    <div className="plataforms">
                        <div className="image">
                            <img src={Spotify} alt="" />
                        </div>
                        <div className="image">
                            <img src={Apple} alt="" />
                        </div>
                        <div className="image">
                            <img src={Google} alt="" />
                        </div>
                        <div className="image">
                            <img src={Pocket} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
