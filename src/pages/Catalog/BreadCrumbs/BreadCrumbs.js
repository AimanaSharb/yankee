import React, {useEffect} from 'react';
import {useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {getShop} from "../../../redux/reducers/shop"
import {getOneItem} from "../../../redux/reducers/oneItem"




const BreadCrumbs = () => {
    let location = useLocation();
    const {status, error, data, filter} = useSelector((store)=>store.shop)

    const {product} = useSelector((store)=>store.oneItem)
    const dispatch = useDispatch()





    useEffect(()=>{
        dispatch(getShop())

    },[filter.type])
    useEffect(()=>{
        dispatch(getOneItem())

    },[product.title])



    return (
        <ul className="breadcrumbs">
            <li className="breadcrumbs__item">Главная</li>

            <li className="breadcrumbs__item">{location.pathname === '/catalog' || location.pathname === `/catalog/${product.id}`  ? 'Каталог' : location.pathname === '/return' ? 'Возврат' : location.pathname === '/pay' ? 'Оплата и доставка' : ''}</li>
            {
                filter.type === 'coat' ? <li className="breadcrumbs__item">Пальто
                </li> :  filter.type === 'jacket' ? <li className="breadcrumbs__item">Пуховики и жилеты
                </li> : filter.type === 'dress' ? <li className="breadcrumbs__item">Платья
                </li> : filter.type === 't-shirt' ? <li className="breadcrumbs__item">Футболки и топы
                </li> : filter.type === 'skirt' ? <li className="breadcrumbs__item">Юбки
                </li> :  filter.type === 'top' ? <li className="breadcrumbs__item">Рубашки и блузы

                </li> : ''
            }
            <li className="breadcrumbs__item">{product.title}</li>
        </ul>
    );
};

export default BreadCrumbs;