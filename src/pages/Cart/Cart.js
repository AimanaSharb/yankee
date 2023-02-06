import React, {useEffect} from 'react';
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";
import trash from "../../assets/catalog/trash.svg"
import {useDispatch, useSelector} from "react-redux";
import {addItemsInCart} from "../../redux/reducers/cart";

const Cart = () => {

    return (
        <section className="cart">
            <div className="container">
                <BreadCrumbs/>

                <div className="cart__top">

                    <h2 className="cart__top-title">Ваш заказ</h2>
                    <div className="cart__top-list">
                        <div className="cart__top-card">
                            <img src="" alt=""/>
                            <h3 className="cart__top-card-title">Кремовое пальто</h3>
                            <select name="size" id="">
                                <option value=""></option>
                            </select>
                            <select name="" id="">
                                <option value=""></option>
                            </select>

                            <p className="cart__top-card-price"></p>
                            <span><img src={trash} alt=""/></span>

                        </div>
                    </div>



                </div>

                <div className="cart__bot">

                </div>
            </div>
            
        </section>
    );
};

export default Cart;