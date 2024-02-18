import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navbar">
            <div className="brand-title">
                <img src="/logo.png" alt="" className="logo-img" />
            </div>
            <button
                className="toggle-button"
                onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
                <span className={isNavExpanded ? "bar open" : "bar"}></span>
                <span className={isNavExpanded ? "bar open" : "bar"}></span>
                <span className={isNavExpanded ? "bar open" : "bar"}></span>
            </button>
            <div className={isNavExpanded ? "navbar-links expanded" : "navbar-links"}>
                <ul>
                    <li>
                        <a href="/opportunities">Opportunities</a>
                    </li>
                    <li>
                        <a href="/how-it-works">How it Works</a>
                    </li>
                    <li>
                        <a href="/about-us">About Us</a>
                    </li>
                    <li>
                        <a href="/sign-in" className="sign-in-button">
                            Sign in
                        </a>
                    </li>
                </ul>
                {/* <div className="line"/> */}
            </div>
                
        </nav>
    );
};

export default Navbar;
