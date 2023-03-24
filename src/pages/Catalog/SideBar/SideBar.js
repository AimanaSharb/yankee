import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeType} from "../../../redux/reducers/shop";
import {useTranslation} from "react-i18next";

const SideBar = () => {

    const dispatch = useDispatch()
    const {filter} = useSelector((store)=>store.shop)

    const {t} = useTranslation()






    return (
        <aside className="sidebar">
            <h2 className="sidebar__title">Каталог</h2>
            <ul className="sidebar__menu">
                <p onClick={()=> dispatch(changeType('coat'))} className={`sidebar__menu-item ${filter.type === 'coat' ? 'active' : ''}`}>
                    {t('catalog.coat')}
                </p>
                <p onClick={()=>dispatch(changeType('jacket'))} className={`sidebar__menu-item ${filter.type === 'jacket' ? 'active' : ''}`}>
                    {t('catalog.jacket')}
                </p>
                <p onClick={()=>dispatch(changeType('top'))} className={`sidebar__menu-item ${filter.type === 'top' ? 'active' : ''}`}>
                    {t('catalog.top')}
                </p>
                <p onClick={()=>dispatch(changeType('skirt'))} className={`sidebar__menu-item ${filter.type === 'skirt' ? 'active' : ''}`}>
                    {t('catalog.skirt')}
                </p>
                <p onClick={()=>dispatch(changeType('t-shirt'))} className={`sidebar__menu-item ${filter.type === 't-shirt' ? 'active' : ''}`}>
                    {t('catalog.shirt')}
                </p>
                <p onClick={()=>dispatch(changeType('dress'))} className={`sidebar__menu-item ${filter.type === 'dress' ? 'active' : ''}`}>
                    {t('catalog.dress')}
                </p>
                <p onClick={()=>dispatch(changeType(''))} className={`sidebar__menu-item ${filter.type === '' ? 'active' : ''}`}>
                    {t('catalog.all')}
                </p>

            </ul>

        </aside>
    );
};

export default SideBar;