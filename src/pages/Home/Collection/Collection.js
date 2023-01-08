import React from 'react';
import {Link} from "react-router-dom"
const Collection = () => {
    return (
        <section className="collection">
            <div className="container">
                <div className="collection__content">
                    <h2 className="collection__title">
                        Новая коллекция
                    </h2>
                    <Link href="" className="collection__link">
                        Смотреть Новинки
                    </Link>
                </div>

            </div>


        </section>
    );
};

export default Collection;