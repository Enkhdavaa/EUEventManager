import React, { useState } from "react";
import { RiMenu3Line,  RiCloseLine} from 'react-icons/ri';
import { VscCompass } from 'react-icons/vsc';
import { AiOutlineShopping } from 'react-icons/ai';
import { SlPeople } from 'react-icons/sl';
import logo from '../../assets/ai.png';
import './navbar.css';

const Menu = () => {
    const size = 25;
    return (
        <>
            <p className="hover-underline-animation"> <VscCompass color="#000" size={size} /> Explore </p>
            <p className="hover-underline-animation"> <AiOutlineShopping color="#000" size={size} /> Shop </p>
            <p className="hover-underline-animation"> <SlPeople color="#000" size={size} /> Instructors </p>
        </>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="gpt3__navbar-links_container">
                <Menu />
            </div>
            <div className="gpt3__navbar-sign">
                <p> SIGN IN </p>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p> Sign in</p>
                                <button type="button"> Sign up </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar