import React from 'react';
import img from '../../../assets/Home/row.png'
const CatalogRow = () => {
    return (
        <>

            <div className="catalog__row">

                <div className="catalog__card">
                    <img src={img} alt=""/>
                    <p className="catalog__card-title">Белая куртка</p>
                    <p className="catalog__card-price">2900 грн</p>
                    <p className="catalog__card-size">XXS</p>
                </div>

                <div className="catalog__card">
                    <img src={img} alt=""/>
                    <p className="catalog__card-title">Белая куртка</p>
                    <p className="catalog__card-price">2900 грн</p>
                    <p className="catalog__card-size">XXS</p>
                </div>

                <div className="catalog__card">
                    <img src={img} alt=""/>
                    <p className="catalog__card-title">Белая куртка</p>
                    <p className="catalog__card-price">2900 грн</p>
                    <p className="catalog__card-size">XXS</p>
                </div>

                <div className="catalog__card">
                    <img src={img} alt=""/>
                    <p className="catalog__card-title">Белая куртка</p>
                    <p className="catalog__card-price">2900 грн</p>
                    <p className="catalog__card-size">XXS</p>
                </div>

                <div className="catalog__card">
                    <img src={img} alt=""/>
                    <p className="catalog__card-title">Белая куртка</p>
                    <p className="catalog__card-price">2900 грн</p>
                    <p className="catalog__card-size">XXS</p>
                </div>

            </div>

        </>
    );
};

export default CatalogRow;