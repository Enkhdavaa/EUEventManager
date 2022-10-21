import React from "react";
import './header.css'
import headerBackground from '../../assets/Background/1.jpeg';

const Header = () => {
    return (
        <div className="amimoves__header">
            <img src={headerBackground} />
        </div>
    )
}

export default Header