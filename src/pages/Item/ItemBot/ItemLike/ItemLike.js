import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation , Autoplay} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import img from "../../../../assets/Home/row.png";
import {useParams} from "react-router";
import {getOneItem} from "../../../../redux/reducers/oneItem";
import {Link} from "react-router-dom";


const ItemLike = () => {


    const {data, status, error} = useSelector((store)=>store.shop)
    const {product} = useSelector((store)=>store.oneItem)
    const params = useParams()
    useEffect(()=>{
        getOneItem(params.id)
    }, [])



    return (

        <>
            {
                status === 'loading' ? <h2>loading...</h2>: status === 'resolve' ?
                    <div className="itemLike__row">
                        {data.map((item)=>(
                            item.type !== product.type ?

                                    <div key={item.id} className="itemLike__card">
                                        <Link  className="itemLike__card-img" to={`/catalog/${item.id}`}>
                                            <img src={item.images[0].img} alt=""/>
                                        </Link>
                                        <p className="itemLike__txt">{item.title}</p>

                                    </div>
                              : ''



                        ))}
                    </div>
                        :<h2>{error}</h2>

            }


        </>
    );
};

export default ItemLike;

