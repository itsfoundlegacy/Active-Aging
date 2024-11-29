import React from "react";
import Navbar from "../components/Navbar";
import image from "../components/image.png";


const Team = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="container">
                <Navbar />
                <div className="box one">
                    <div className="box hi">
                        <h1>Meet the Team</h1>
                    </div>
                </div>
                <div className="box two margin">
                    <div class="profile-container">
                        <div class="profile-card">
                            <img src={image} alt=""></img>
                            <h2>Ishaan Anand</h2>
                            <h3>Founder</h3>
                            <p class="bio">Hey! My name is Ishaan Anand, and I’m a junior at Woodbridge Academy. I’ve always been drawn 
                                to biology and understanding how we can improve health and wellness, especially for those who 
                                may not have easy access to resources. At Active Aging, my goal is to help make a positive 
                                impact by promoting healthier lifestyles for seniors in our community. Outside of this, 
                                I enjoy swimming, running, and spending time with friends.</p>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-google"> </a>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
                        </div>
                        <div class="profile-card">
                            <img src={image} alt=""></img>
                            <h2>Sriram Banigallapati</h2>
                            <h3>Founder</h3>
                            <p class="bio">Hey! My name is Ishaan Anand, and I’m a junior at Woodbridge Academy. I’ve always been drawn 
                                to biology and understanding how we can improve health and wellness, especially for those who 
                                may not have easy access to resources. At Active Aging, my goal is to help make a positive 
                                impact by promoting healthier lifestyles for seniors in our community. Outside of this, 
                                I enjoy swimming, running, and spending time with friends.</p>
                            <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a>
                            <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-google"> </a>
                            <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
                        </div>
                        <div class="profile-card">
                            <img src={image} alt=""></img>
                            <h2>Aditya Shah</h2>
                            <h3>Founder</h3>
                            <p class="bio">Hi, My name is Aditya Shah, I’m a junior at Woodbridge Academy Magnet School! 
                                    My research in metabolic disorders and passion for sports and exercise is what
                                    led me to start this initiative alongside Sriram and Ishaan! In my time here, 
                                    I hope to make a difference in my community around me, and help promote exercise and fitness!</p>
                            <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a>
                            <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-google"> </a>
                            <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
                        </div>
                </div>
                </div>
                <div className="box three margin">
                    <div className="profile-container">
                        <div className="profile-card">
                            <img src={image} alt=""></img>
                            <h2>Shreyas Batra</h2>
                            <h3><i>Chief of Staff</i></h3>
                        </div>
                    </div>
                </div>
                <div className="box four margin">
                    <div className="profile-container">
                        <div className="profile-card">
                            <img src={image} alt=""></img>
                                <h2>Yashwin Kothyala</h2>
                                <h3><i>Director of Outreach</i></h3>
                        </div>
                        <div className="profile-card">
                            <img src={image} alt=""></img>
                                <h2>Victoria Bartusik</h2>
                                <h3><i>Director of Creative Design</i></h3>
                        </div>
                        <div className="profile-card">
                            <img src={image} alt=""></img>
                                <h2>Alex Wordel</h2>
                                <h3><i>Director of Programs</i></h3>
                        </div>
                        <div className="profile-card">
                            <img src={image} alt=""></img>
                                <h2>Aum Patel</h2>
                                <h3><i>Director of Fundraising</i></h3>
                        </div>
                        <div className="profile-card">
                            <img src={image} alt=""></img>
                                <h2>Pranava Behera</h2>
                                <h3><i>Director of Technology</i></h3>
                        </div>
                    </div>
                </div>           
            </div>
        </>
    );
};

export default Team;