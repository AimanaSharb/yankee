import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeType} from "../../../redux/reducers/shop";

const SideBar = () => {

    const dispatch = useDispatch()
    const {filter} = useSelector((store)=>store.shop)







    return (
        <aside className="sidebar">
            <h2 className="sidebar__title">Каталог</h2>
            <ul className="sidebar__menu">
                <p onClick={()=> dispatch(changeType('coat'))} className={`sidebar__menu-item ${filter.type === 'coat' ? 'active' : ''}`}>
                    Пальто
                </p>
                <p onClick={()=>dispatch(changeType('jacket'))} className={`sidebar__menu-item ${filter.type === 'jacket' ? 'active' : ''}`}>
                    Пуховики и жилеты
                </p>
                <p onClick={()=>dispatch(changeType('top'))} className={`sidebar__menu-item ${filter.type === 'top' ? 'active' : ''}`}>
                    Рубашки и блузы
                </p>
                <p onClick={()=>dispatch(changeType('skirt'))} className={`sidebar__menu-item ${filter.type === 'skirt' ? 'active' : ''}`}>
                    Юбки
                </p>
                <p onClick={()=>dispatch(changeType('t-shirt'))} className={`sidebar__menu-item ${filter.type === 't-shirt' ? 'active' : ''}`}>
                    Футболки и топы
                </p>
                <p onClick={()=>dispatch(changeType('dress'))} className={`sidebar__menu-item ${filter.type === 'dress' ? 'active' : ''}`}>
                    Платья
                </p>
                <p onClick={()=>dispatch(changeType(''))} className={`sidebar__menu-item ${filter.type === '' ? 'active' : ''}`}>
                    Посмотреть всё
                </p>

            </ul>

        </aside>
    );
};

export default SideBar;