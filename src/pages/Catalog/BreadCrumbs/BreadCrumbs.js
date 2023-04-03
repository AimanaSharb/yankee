import React from 'react';
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";




const BreadCrumbs = () => {
    let location = useLocation();
    const {filter} = useSelector((store)=>store.shop)
    const {product} = useSelector(store => store.oneItem)
    const {t} = useTranslation()


    return (
        <ul className="breadcrumbs">


                <li className="breadcrumbs__item">{t('catalog.main')}</li>
                <li className="breadcrumbs__item">{location.pathname === '/catalog' && `/catalog/${product.id}` ? t('catalog.catalog')  : location.pathname === '/return' ? t('catalog.return') : location.pathname === '/pay' ? t('footer.payment') : location.pathname === '/like' ? t('footer.like') : location.pathname === "/cart" ? t('catalog.cart')  : ''}</li>
            {
                filter.type === 'coat' ? <li className="breadcrumbs__item">{t('catalog.coat')}
                </li> :  filter.type === 'jacket' ? <li className="breadcrumbs__item">{t('catalog.jacket')}
                </li> : filter.type === 'dress' ? <li className="breadcrumbs__item">{t('catalog.dress')}
                </li> : filter.type === 't-shirt' ? <li className="breadcrumbs__item">{t('catalog.shirt')}
                </li> : filter.type === 'skirt' ? <li className="breadcrumbs__item">{t('catalog.skirt')}
                </li> :  filter.type === 'top' ? <li className="breadcrumbs__item">{t('catalog.top')}

                </li> : ''
            }
        </ul>
    );
};

export default BreadCrumbs;