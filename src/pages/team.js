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
                        <h2>Ishaan Anand</h2>
                        <h3>Founder</h3>
                        <div className="flex-container">
                            <div className="profilepic">
                                <img src={image} alt=""></img>
                            </div>
                            <div className="links">
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-google"> </a>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
                            </div>
                        </div>
                        <div className="flex-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="profile">
                        <h2>Sriram Banigallapati</h2>
                        <h3>Founder</h3>
                        <div className="flex-container">
                            <div className="profilepic">
                                <img src={image} alt=""></img>
                            </div>
                            <div className="links">
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-google"> </a>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
                            </div>
                        </div>
                        <div className="flex-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="profile">
                        <h2>Aditya Shah</h2>
                        <h3>Founder</h3>
                        <div className="flex-container">
                            <div className="profilepic">
                                <img src={image} alt=""></img>
                            </div>
                            <div className="links">
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-google"> </a>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
                            </div>
                        </div>
                        <div className="flex-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>
                <div className="box three margin">
                    <div className="profile-lesser profile-mid">
                            <img src={image} alt="" className="profilepic"></img>
                            <div className="flex-container-lesser">
                                <h2>Shreyas Batra</h2>
                                <h3><i>Chief of Staff</i></h3>
                            </div>
                    </div>
                </div>
                <div className="box four margin">
                    <div className="profile-lesser-container">
                        <div className="profile-lesser">
                            <img src={image} alt="" className="profilepic-lesser"></img>
                            <div className="flex-container-lesser">
                                <h2>Yashwin Kothyala</h2>
                                <h3><i>Director of Outreach</i></h3>
                            </div>
                        </div>
                        <div className="profile-lesser">
                            <img src={image} alt="" className="profilepic-lesser"></img>
                            <div className="flex-container-lesser">
                                <h2>Victoria Bartusik</h2>
                                <h3><i>Director of Creative Design</i></h3>
                            </div>
                        </div>
                        <div className="profile-lesser">
                            <img src={image} alt="" className="profilepic-lesser"></img>
                            <div className="flex-container-lesser">
                                <h2>Alex Wordel</h2>
                                <h3><i>Director of Programs</i></h3>
                            </div>
                        </div>
                        <div className="profile-lesser">
                            <img src={image} alt="" className="profilepic-lesser"></img>
                            <div className="flex-container-lesser">
                                <h2>Aum Patel</h2>
                                <h3><i>Director of Fundraising</i></h3>
                            </div>
                        </div>
                        <div className="profile-lesser">
                            <img src={image} alt="" className="profilepic-lesser"></img>
                            <div className="flex-container-lesser">
                                <h2>Pranava Behera</h2>
                                <h3><i>Director of Technology</i></h3>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        </>
    );
};

export default Team;