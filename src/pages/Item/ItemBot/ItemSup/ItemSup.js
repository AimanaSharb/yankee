import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import img from "../../../../assets/Home/row.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {getOneItem} from "../../../../redux/reducers/oneItem";

const ItemSup = () => {
    const {data} = useSelector((store)=>store.shop)
    const {product} = useSelector(store=> store.oneItem)
    const styleForHearts = {color:"white", fontSize:"30px"}



    return (

        <>
            {
                    <Swiper className="mySwiper3" slidesPerView={3} autoplay={{delay:1000, waitForTransition:2000}} spaceBetween={15} loop={true}   modules={[Autoplay, Navigation]} >
                        {data.map((item)=>(
                            item.type === product.type ?
                                <SwiperSlide className="swiper-slide-none" key={item.id}>
                                <div className="swiper__card">
                                <Link  className="swiper__card-img" to={`/catalog/${item.id}`}>
                                    <img src={item.images[0].img} alt=""/>
                                </Link>
                                    <p className="swiper__txt">{item.title}</p>
                                </div>
                            </SwiperSlide> : ''


                        ))}

                    </Swiper>

            }


        </>
    );
};

export default ItemSup;