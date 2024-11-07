import React from "react";
import Navbar from "../components/Navbar";
import SimpleSlider from "../components/Slider/Slider";
import SimpleSlider2 from "../components/Slider/Slider2";
import SimpleSlider3 from "../components/Slider/Slider3";


const Pictures = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="container">
                <div className="box one">
                    <Navbar />
                    <div className="box hi">
                        <h1>What We Do</h1>
                    </div>
                </div>
                <div className="box two">
                    <div>
                        <h1>Charity Events<br />(see below)</h1>
                    </div>
                </div>
                <div className="box three slider">
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
                <div className="box four">
                    <div className="join">
                        <h1>Join Us</h1>
                        <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
                            <button>Sign Up</button>
                        </a>
                    </div>
                    <div className="join">
                        <h1>Follow</h1>
                        <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
                            <button>
                                <a href="https://example.com/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pictures;