import React from 'react';
import {useTranslation} from "react-i18next";

const Know = () => {
    const {t} = useTranslation()
    return (
        <section className="know">
            <h2 className="know__title">
                {t('home.know')}
            </h2>

            <form action="" className="know__form">
                <input placeholder="Ваш e-mail*" type="email"/>
                <button className="btn" type={"submit"}>{t('home.subscribe')}</button>

            </form>
            <p className="know__txt">{t('home.con')}
            </p>
        </section>
    );
};

export default Know;