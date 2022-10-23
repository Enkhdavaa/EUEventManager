import React from "react";
import './header.css'
import headerBackground from '../../assets/Background/3.jpeg';

const Header = () => {
    return (
        <div className="amimoves__header">
            <div className="amimoves__header-backgroundImage">
                <img src={headerBackground} alt="backgroundImage" />
            </div>
            <div className="amimoves__header-onPicText">
                 <h1> 50% OFF FOR LIFE </h1>
                 <h2> Sign up to lock in a monthly or annual membership at half off FOREVER. </h2>
                 <button className="color_change"> Save Now </button>
                 <p> Send a Gift Card </p>
            </div>
        </div>
    )
}

export default Header