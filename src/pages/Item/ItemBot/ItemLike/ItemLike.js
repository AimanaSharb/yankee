import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation , Autoplay} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {getShop} from "../../../../redux/reducers/shop"
import img from "../../../../assets/Home/row.png";
import {useParams} from "react-router";
import {getOneItem} from "../../../../redux/reducers/oneItem";


const ItemLike = () => {

    const dispatch = useDispatch()

    const {data, filter, status, error} = useSelector((store)=>store.shop)
    useEffect(()=>{
        dispatch(getShop(filter.type))

    },[filter.type])
    const params = useParams()
    const {product} = useSelector((store)=>store.oneItem)


    useEffect(()=>{
        dispatch(getOneItem(params.id))

    },[])


    return (

        <>
            {
                status === 'loading' ? <img src="../../../assets/istockphoto-1288130003-612x612.jpeg" alt=""/> : status === 'resolve' ?
                    <Swiper slidesPerView={4} autoplay={{delay: 2500, disableOnInteraction: false}}  spaceBetween={15} loop={true}   modules={[Autoplay, Navigation]} className="mySwiper">
                        {data.map((item)=>(
                                    item.type !== product.type ?
                                        <SwiperSlide>
                                            <div className="swiper__card">
                                                <img src={`../${item.img}`} alt=""/>
                                                <p className="swiper__txt">{item.title}</p>

                                            </div>
                                        </SwiperSlide> : ''



                        ))}

                    </Swiper> :<h2>{error}</h2>

            }


        </>
    );
};

export default ItemLike;

