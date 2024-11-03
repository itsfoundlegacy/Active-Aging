import React from "react";
import Navbar from "../components/Navbar";
import image from "../components/image.png";
import one from "../components/one.JPG";
import two from "../components/two.JPG";
import three from "../components/three.JPG";
import four from "../components/four.JPG";

const Pictures = () => {
    return (
        <>
            <div class="container">
                <div className="box one">
                    <Navbar />
                    <div className="box hi">
                        <h1>What We Do</h1>
                    </div>
                </div>
                <div className="box two pics">
                    <div className="box hi margin">
                        <div>
                            <h1>Charity Events</h1>
                            <ul>
                                <li>some event</li>
                                <li>some significant milestone</li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="column">
                                <img src={one}></img>
                                <img src={two}></img>
                            </div>
                            <div className="column">
                                <img src={three}></img>
                                <img src={four}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box three">
                    <div>
                        <h1>Join Us!</h1>
                        <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
                            <button>Sign Up</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pictures;