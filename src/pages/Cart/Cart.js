import React from 'react';
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";
import trash from "../../assets/catalog/trash.svg"

const Cart = () => {

    return (
        <section className="cart">
            <div className="container">
                <BreadCrumbs/>

                <div className="cart__top">
                    <h2 className="cart__top-title"></h2>

                </div>

                <div className="cart__bot">

                </div>

            </div>
            
        </section>
    );
};

export default Cart;