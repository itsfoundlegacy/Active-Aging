import React from "react";
import Navbar from "../components/Navbar";
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
                <div className="box two">
                    <div>
                        <h1>Charity Events</h1>
                        <h2>(see below)</h2>
                    </div>
                </div>
                <div className="box three pics">
                    <div className="box hi">
                        <div className="row">
                            <div className="column">
                                <img src={one} alt=""></img>
                                <img src={two} alt=""></img>
                            </div>
                            <div className="column">
                                <img src={three} alt=""></img>
                                <img src={four} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box four">
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