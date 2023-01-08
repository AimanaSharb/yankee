import React from 'react';
import {useLocation} from "react-router";





const BreadCrumbs = () => {
    let location = useLocation();
    return (
        <ul className="breadcrumbs">
            <li className="breadcrumbs__item">Главная</li>

            <li className="breadcrumbs__item">{location.pathname === '/catalog.scss'  ? 'Каталог' : ''}</li>

        </ul>
    );
};

export default BreadCrumbs;