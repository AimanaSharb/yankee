import React, {useState} from 'react';
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";
import {useTranslation} from "react-i18next";
import img from '../../assets/forInstatnce.png'
import {GrTrash} from 'react-icons/gr'
import {useSelector} from "react-redux";



const Cart = () => {
    const {t} = useTranslation()
    const [counter, setCounter] = useState(1)
    const styleForTrashCan = { color: "rgb(204, 168,  138)", fontSize:"20px" }

    return (
        <section className="cart">
            <div className="container">
                <BreadCrumbs/>

                <div className="cart__top">
                    <h2 className="cart__top-title">{t('cart.yourorder')}</h2>
                    <div className="cart__top-card">
                        <img className="cart__top-card-img" src={img} alt=""/>
                        <p className="cart__top-card-title">Hello</p>
                        <select className="cart__top-card-sizes" name="size" id="">
                            <option value="">M</option>
                            <option value="">S</option>
                        </select>
                        <div className="cart__top-card-counter">
                            <span className="cart__top-card-icons" onClick={()=>setCounter(counter-1)}>-</span>
                            <p className="cart__top-card-count">{counter}</p>
                            <span className="cart__top-card-icons" onClick={()=>setCounter(counter+1)}>+</span>
                        </div>

                        <p className="cart__top-card-price">398392$</p>

                        <span className="cart__top-card-trash">{<GrTrash style={styleForTrashCan}/>}</span>

                    </div>

                </div>

                <div className="cart__bot">

                </div>

            </div>
            
        </section>
    );
};

export default Cart;