import React, {useEffect,  useRef, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneItem} from "../../../redux/reducers/oneItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import {useParams} from "react-router";




const ItemSwiper = () => {



    const dispatch = useDispatch()
    const {product} = useSelector((store)=>store.oneItem)
    const params = useParams()



    useEffect(()=>{
        dispatch(getOneItem(params.id))

    },[])
    return (
        <>
            <Swiper loop={true} navigation={true} modules={[Navigation]} >
             <SwiperSlide>
                 <div className="itemswiper__card">
                     <img className="itemswiper__img" src={`../${product.img}`} alt=""/>
                 </div>
             </SwiperSlide>
            </Swiper>
        </>

    );
};

export default ItemSwiper;