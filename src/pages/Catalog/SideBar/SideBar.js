import React from 'react';

const SideBar = () => {
    return (
        <aside className="sidebar">
            <h2 className="sidebar__title">Каталог</h2>
            <ul className="sidebar__menu">
                <p className="sidebar__menu-item">
                    New
                </p>
                <p className="sidebar__menu-item">
                    Пальто
                </p>
                <p className="sidebar__menu-item">
                    Пуховики и жилеты
                </p>
                <p className="sidebar__menu-item">
                    Рубашки и блузы
                </p>
                <p className="sidebar__menu-item">
                    Юбки
                </p>
                <p className="sidebar__menu-item">
                    Футболки и топы
                </p>
                <p className="sidebar__menu-item">
                    Платья
                </p>
                <p className="sidebar__menu-item">
                    Посмотреть всё
                </p>

            </ul>

        </aside>
    );
};

export default SideBar;