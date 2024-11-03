import React from "react";
import Navbar from "../components/Navbar";
import image from "../components/image.png";

const Team = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="container">
                <div className="box one">
                    <Navbar />
                    <div className="box hi">
                        <h1>Meet the Team</h1>
                    </div>
                </div>
                <div className="box two margin">
                    <div className="profile">
                        <h2>Ishaan Anand: Head of Something</h2>
                        <div className="flex-container">
                            <div className="profilepic">
                                <img src={image}></img>
                            </div>
                            <div className="links">
                                <a href="#" class="fa fa-instagram"></a>
                                <a href="#" class="fa fa-google"></a>
                                <a href="#" class="fa fa-linkedin"></a>
                            </div>
                        </div>
                        <div className="flex-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="profile">
                        <h2>Sriram Banigallapati: Head of Something</h2>
                        <div className="flex-container">
                            <div className="profilepic">
                                <img src={image}></img>
                            </div>
                            <div className="links">
                                <a href="#" class="fa fa-instagram"></a>
                                <a href="#" class="fa fa-google"></a>
                                <a href="#" class="fa fa-linkedin"></a>
                            </div>
                        </div>
                        <div className="flex-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="box three margin">
                    <div className="profile">
                        <h2>Aditya Shah: Head of Something</h2>
                        <div className="flex-container">
                            <div className="profilepic">
                                <img src={image}></img>
                            </div>
                            <div className="links">
                                <a href="#" class="fa fa-instagram"></a>
                                <a href="#" class="fa fa-google"></a>
                                <a href="#" class="fa fa-linkedin"></a>
                            </div>
                        </div>
                        <div className="flex-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="profile">
                        <h2>Pranava Behera: Head of Technology</h2>
                        <div className="flex-container">
                            <div className="profilepic">
                                <img src={image}></img>
                            </div>
                            <div className="links">
                                <a href="#" class="fa fa-instagram"></a>
                                <a href="#" class="fa fa-google"></a>
                                <a href="#" class="fa fa-linkedin"></a>
                            </div>
                        </div>
                        <div className="flex-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

export default Team;