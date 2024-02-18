import React from 'react';
import "./Hero.css";
import HeroBannerVideo from '../../assets/HeroBannerVideo.mp4';

const Hero = () => {
    return (
        <div className="hero-container">
            <video className="hero-video" autoPlay loop muted>
                <source src={HeroBannerVideo} type="video/mp4"/>
            </video>
            <div className="hero-text">
                <h1>Overcome Investment Barriers,</h1>
                <h2>Build Sustainable Wealth</h2>
                <p>Dive into alternative markets with us and set your capital on the path of unparalleled growth.</p>
            </div>
        </div>
    );
}

export default Hero;
