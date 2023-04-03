import React, {useEffect} from 'react';
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";
import {sortBy, getShop} from "../../../redux/reducers/shop";
import {useDispatch, useSelector} from "react-redux";
const Collection = () => {
    const {t, i18n} = useTranslation()

    const {filter} = useSelector(store => store.shop)


    useEffect(()=>{
        getShop(filter.sort)
    }, [filter.sort])
    const dispatch = useDispatch()


    return (
        <section className="collection">
            <div className="container">
                <div className="collection__content">
                    <h2 className="collection__title">
                        {t('home.collection')}
                    </h2>
                    <Link  onClick={()=>dispatch(sortBy('new'))} to={'/catalog'} href="" className="collection__link">
                        {t('home.watchnew')}
                    </Link>
                </div>

            </div>


        </section>
    );
};

export default Collection;