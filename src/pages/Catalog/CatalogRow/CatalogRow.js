import React, {useEffect} from 'react';
import {getShop} from "../../../redux/reducers/shop"
import {useDispatch, useSelector} from "react-redux";
import img from "../../../assets/Home/row.png";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import {Link} from "react-router-dom";
import {addItemsInCart} from "../../../redux/reducers/cart";
import {addToLike} from "../../../redux/reducers/like";
import axios from "axios";


const CatalogRow = () => {
    const dispatch = useDispatch()
    const {status, error, data, filter} = useSelector((store)=>store.shop)

    useEffect(()=>{
        dispatch(getShop(filter))

    },[filter.type])



        const handleAddToLike = (product) =>{

            axios.post('http://localhost:4444/like', product)
                .then((res)=>console.log(res))
                .catch((err)=>console.log(err.message))
        }







    return (
        <div className="catalog__right-side">
            <CatalogFilter/>

            {
                status === 'loading' ? <img src="../../../assets/istockphoto-1288130003-612x612.jpeg" alt=""/> : status === 'resolve' ?
                    <div className="catalog__row">
                        {data.map((item)=>(
                            <div key={item.id} className="catalog__card">
                                <div className="catalog__card-like" onClick={()=> handleAddToLike(item)}><span className="calatog__card-like"></span></div>
                                <Link to={`/catalog/${item.id}`} >
                                    <img src={item.img} alt="" className="catalog__card-img"/>
                                </Link>
                                <p className="catalog__card-title">{item.title}</p>
                                <p className="catalog__card-price">{item.price}$</p>
                                <p className="catalog__card-brand">{item.brand}</p>
                                <ul className="catalog__card-sizes">{
                                    item.sizes.map((size)=>(
                                        <p className="catalog__card-size" key={size.id}>{size.size}</p>
                                    ))
                                }</ul>
                            </div>
                        ))}


                    </div> : <h2>{error}</h2>


            }

        </div>
    );
};

export default CatalogRow;