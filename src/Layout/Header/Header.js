import React, {useState} from 'react';
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
import {useSelector, useDispatch} from "react-redux";
import {logoutAccount} from "../../redux/reducers/users";
import SearchLine from "../../components/SearchLine";
import {changeSearch} from "../../redux/reducers/shop";
import {useTranslation} from "react-i18next";


const Header = () => {
    let location = useLocation()
    const {users} = useSelector( store => store.users)
    const dispatch = useDispatch()
    const styleForExit = {fontSize:"20px", color: "#E0BEA2" }
    const styleForExitHome = {fontSize:"20px", color: "white" }
    const [search, setSearch] = useState(false)
    const {t, i18n} = useTranslation()

    const changeLanguage= (lang) =>{
        i18n.changeLanguage(lang)
    }


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
                        <li
                            onClick={()=>{
                            changeLanguage('en')}}
                            className={`header__lang ${location.pathname === '/' ? 'header__home-lang': ''}`}>RU</li>
                        <li
                            onClick={()=>{
                                changeLanguage('ru')}}
                            className={`header__lang ${location.pathname === '/' ? 'header__home-lang':''}`}>UAH</li>
                    </ul>
                    <ul className="header__icons">

                        <li onClick={()=> setSearch(true)}>
                            {
                                search === true && location.pathname === '/catalog' ?   <SearchLine/> :

                                    <Link to='/catalog'>
                                        <IconContext.Provider value={{className:`${location.pathname === '/' ? 'header-icon' : 'icon'}`}}>
                                        <CgSearch/>
                                    </IconContext.Provider>
                                    </Link>
                            }

                        </li>
                        {
                            users.email.length ?
                                <Link to="/"
                                      style={location.pathname === '/' ? styleForExitHome : styleForExit }
                                      onClick={()=>{
                                    dispatch(logoutAccount())
                                    localStorage.removeItem('users')
                                }} >Exit</Link> :
                                <Link to="/login">
                                <IconContext.Provider value={{className: `${location.pathname === '/' ? 'header-icon' : 'icon'}` }}>
                                    <VscAccount/>
                                </IconContext.Provider>
                            </Link>
                        }
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