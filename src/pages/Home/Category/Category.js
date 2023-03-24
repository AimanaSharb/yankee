import React from 'react';
import SwiperFunc from "../Collection/Swiper/Swiper";
import Know from "../Know/Know";
import {useTranslation} from "react-i18next";

const Category = () => {

    const {t} = useTranslation()
    return (
        <section className="category">
            <div className="container">
                <h2 className="category__title">
                    {t('home.category')}
                </h2>

                <SwiperFunc/>
                <Know/>
            </div>





        </section>
    );
};

export default Category;