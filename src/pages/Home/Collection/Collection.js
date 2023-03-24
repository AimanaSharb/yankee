import React from 'react';
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";
const Collection = () => {
    const {t, i18n} = useTranslation()

    return (
        <section className="collection">
            <div className="container">
                <div className="collection__content">
                    <h2 className="collection__title">
                        {t('home.collection')}
                    </h2>
                    <Link href="" className="collection__link">
                        {t('home.watchnew')}
                    </Link>
                </div>

            </div>


        </section>
    );
};

export default Collection;