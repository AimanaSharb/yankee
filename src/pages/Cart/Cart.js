import React, {useEffect, useState} from 'react';
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";
import {useTranslation} from "react-i18next";
import img from '../../assets/forInstatnce.png'
import {GrTrash} from 'react-icons/gr'
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../redux/reducers/cart";



const Cart = () => {
    const {t} = useTranslation()
    const styleForTrashCan = { color: "rgb(204, 168,  138)", fontSize:"20px" }
    const dispatch = useDispatch()
    const {data} = useSelector(store => store.cart)
    const [counter, setCounter] = useState(1)
    useEffect(()=>{
        dispatch(getCart(data))
    }, [data])

    return (
        <section className="cart">
            <div className="container">
                <BreadCrumbs/>

                <div className="cart__top">
                    <h2 className="cart__top-title">{t('cart.yourorder')}</h2>
                    {data.map((product)=>(
                        <div className="cart__top-card">
                            <img className="cart__top-card-img" src='' alt=""/>
                            <div className="cart__top-card-title-contain">
                                <p className="cart__top-card-title">{product.title}</p>
                            </div>
                            <div className="cart__top-card-container">
                                <select className="cart__top-card-sizes" name="size" id="">
                                    <option value="">M</option>
                                    <option value="">S</option>
                                </select>
                                <div className="cart__top-card-counter">
                                    <span className="cart__top-card-icons" onClick={()=>setCounter(counter-1)}>-</span>
                                    <p className="cart__top-card-count">{counter}</p>
                                    <span className="cart__top-card-icons" onClick={()=>setCounter(counter+1)}>+</span>
                                </div>
                            </div>

                            <p className="cart__top-card-price">{product.price * counter + '$'}</p>

                            <span className="cart__top-card-trash">{<GrTrash style={styleForTrashCan}/>}</span>

                        </div>
                    ))}

                </div>

                <div className="cart__bot">

                </div>

            </div>
            
        </section>
    );
};

export default Cart;