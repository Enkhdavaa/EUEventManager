import React from "react";
import './header.css'
import headerBackground from '../../assets/Background/1.jpeg';

const Header = () => {
    return (
        <div className="amimoves__header">
            <img src={headerBackground} />
            <div className="amimoves__header-onPicText">
                 <h1> 50% OFF FOR LIFE </h1>
                 <h2> SIgn up to lock in a monthly or annual membership at half off FOREVER. </h2>
                 <button> Save Now </button>
                 <p> Send a Gift Card </p>
            </div>
        </div>
    )
}

export default Header