import React from "react";
import Navbar from "../components/Navbar";
import image from "../components/image.png"

const Home = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="container">
                <Navbar />
                <div className="box one">
                    <div className="box hi">
                        <div id='title'>
                            <h1>Active Aging</h1>
                        </div>
                        <div id="logo">
                            <img src={image} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="box two NO">
                    <div className="box hi margin">
                        <div>
                            <h1>Mission Statement</h1>
                        </div>
                        <div>
                            <p>"Our mission is to do something, and then do something, and then finally do something (not sure what yet)"</p>
                        </div>
                    </div>
                </div>
                <div className="box three NO">
                    <div className="box hi margin">
                        <div>
                            <h1>Our Goals</h1>
                        </div>
                        <div>
                            <h2>We strive to:</h2>
                            <ul>
                                <li>Do something</li>
                                <li>Do something</li>
                                <li>Do something</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="box four">
                    <div className="join">
                        <h1>Join Us</h1>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEd_Dh2P-UeBV2DfzjnUxiB0e1Gq_AZRsKIdYILiuinpWetA/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener noreferrer">
                            <button>Sign Up</button>
                        </a>
                    </div>
                    <div className="join">
                        <h1>Follow</h1>
                        <a href="https://www.instagram.com/active.aging.official/" target="_blank" rel="noopener noreferrer">
                            <button>
                                <a href="https://www.instagram.com/active.aging.official/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;