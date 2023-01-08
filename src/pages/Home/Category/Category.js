import React from 'react';
import SwiperFunc from "../Collection/Swiper/Swiper";
import Know from "../Know/Know";

const Category = () => {
    return (
        <section className="category">
            <div className="container">
                <h2 className="category__title">
                    Категории
                </h2>

                <SwiperFunc/>
                <Know/>
            </div>





        </section>
    );
};

export default Category;