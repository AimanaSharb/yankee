import React from 'react';
import {Link} from "react-router-dom"
import logo from "../../assets/header/YANKI.svg"
import {HiMenuAlt2} from "react-icons/hi"
import {IconContext} from "react-icons";
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
                    <IconContext.Provider value={{ className:`${location.pathname === '/' ? 'header-burger' : 'burger'}` }}>
                        <HiMenuAlt2/>
                    </IconContext.Provider>
                    <ul className={`header__list ${location.pathname === '/' ? 'header__home-list'  : ''}`}>
                        <Link className="header__list-item">NEW</Link>
                        <Link to="catalog" className="header__list-item">КАТАЛОГ</Link>
                        <Link className="header__list-item">О НАС</Link>
                    </ul>
                    <Link to="/" className="header__logo">
                        <img className="header__logo" src={location.pathname === '/' ? logo : logo2} alt=""/>
                    </Link>

                    <ul className="header__langs">
                        <li className={`header__lang ${location.pathname === '/' ? 'header__home-lang': ''}`}>RU</li>
                        <li className={`header__lang ${location.pathname === '/' ? 'header__home-lang':''}`}>UAH</li>
                    </ul>
                    <ul className="header__icons">

                        <li>
                            <IconContext.Provider value={{className:`${location.pathname === '/' ? 'header-icon' : 'icon'}`}}>
                                <CgSearch/>
                            </IconContext.Provider>
                        </li>
                        <Link to="/login">
                            <IconContext.Provider value={{className: `${location.pathname === '/' ? 'header-icon' : 'icon'}` }}>
                                <VscAccount/>
                            </IconContext.Provider>
                        </Link>
                        <Link to="/like">

                            <IconContext.Provider value={{className: `${location.pathname === '/' ? 'header-icon' : 'icon'}` }}>
                                <RiHeartLine/>
                            </IconContext.Provider>
                        </Link>
                        <Link>
                            <IconContext.Provider value={{ className: `${location.pathname === '/' ? 'header-icon' : 'icon'}` }}>
                                <FiShoppingCart/>
                            </IconContext.Provider>
                        </Link>
                    </ul>

                </nav>
            </div>



        </header>
    );
};

export default Header;