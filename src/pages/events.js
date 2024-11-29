import React from "react";
import Navbar from "../components/Navbar";
import SimpleSlider from "../components/Slider/Slider";
import SimpleSlider2 from "../components/Slider/Slider2";
import SimpleSlider3 from "../components/Slider/Slider3";
import image from "../components/image.png";


const Events = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="container">
                
            <Navbar />
                <div className="box one">
                    <div className="box hi">
                        <h1>What We Do</h1>
                    </div>
                </div>
                <div className="box two slider">
                    <div className="slider-wrapper">
                        <SimpleSlider></SimpleSlider>
                    </div>
                    <div className="slider-wrapper">
                        <SimpleSlider2></SimpleSlider2>
                    </div>
                    <div className="slider-wrapper">
                        <SimpleSlider3></SimpleSlider3>
                    </div>
                </div>
                <div className="box three">
                    <div class="event-container">
                        <h1>Event #1 at Maplewood</h1>
                        <p class="date">10/12/24</p>
                        <div class="content">
                            <p class="description">
                                At this event, we’ll bring engaging activities to a senior home, creating a space where residents can enjoy gentle movement, stimulating puzzles, and lively discussions. We’ll start with a warm-up to get everyone moving comfortably, followed by large-print puzzles like Sudoku and crosswords that we’ll work on together. Our volunteers will be there to assist, encourage conversation, and foster connections through shared problem-solving. By the end, we’ll have created a fun and social atmosphere that encourages cognitive engagement and a sense of community among all participants.
                            </p>
                            <img src={image} alt="" class="logo" />
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

export default Events;