import React from 'react';
import {Link} from "react-router-dom"
import logo from "../../assets/header/YANKI.svg"
import {HiMenuAlt2} from "react-icons/hi"
import {IconContext} from "react-icons";
import Catalog from "../../pages/Catalog/Catalog";
import {useLocation} from "react-router";
import logo2 from "../../assets/header/YANKI2.svg";
import {CgSearch} from "react-icons/cg";
import {VscAccount} from "react-icons/vsc";
import {RiHeartLine} from "react-icons/ri";
import {FiShoppingCart} from "react-icons/fi";



const Header = () => {
    let location = useLocation()

    return (
        <header className={`header ${location.pathname === '/' ? 'header__home'  : ''}`}>
            <div className="container">
                <nav className="header__nav">
                    <IconContext.Provider value={{ className: "header__menu-icon" }}>
                        <HiMenuAlt2/>
                    </IconContext.Provider>
                    <ul className={`header__list ${location.pathname === '/' ? 'header__home-list'  : ''}`}>
                        <Link className="header__list-item">NEW</Link>
                        <Link to="catalog" className="header__list-item">КАТАЛОГ</Link>
                        <Link className="header__list-item">О НАС</Link>
                    </ul>
                    <h1 className="header__logo">
                        <img className="header__logo" src={location.pathname === '/' ? logo : logo2} alt=""/>
                    </h1>

                    <ul className="header__langs">
                        <li className={`header__lang ${location.pathname === '/' ? 'header__home-lang': ''}`}>RU</li>
                        <li className={`header__lang ${location.pathname === '/' ? 'header__home-lang':''}`}>UAH</li>
                    </ul>
                    <ul className="header__icons">

                        <li>
                            <IconContext.Provider value={{ className: "header__search-icon" }}>
                                <CgSearch/>
                            </IconContext.Provider>
                        </li>
                        <li >
                            <IconContext.Provider value={{ className: "header__acc-icon" }}>
                                <VscAccount/>
                            </IconContext.Provider>
                        </li>
                        <li >

                            <IconContext.Provider value={{ className: "header__heart-icon" }}>
                                <RiHeartLine/>
                            </IconContext.Provider>
                        </li>
                        <li>
                            <IconContext.Provider value={{ className: "header__cart-icon" }}>
                                <FiShoppingCart/>
                            </IconContext.Provider>
                        </li>
                    </ul>

                </nav>
            </div>



        </header>
    );
};

export default Header;