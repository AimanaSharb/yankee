import React, {useEffect,  useRef, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneItem} from "../../../redux/reducers/oneItem";
import { Swiper, SwiperSlide } from "swiper/react";
import {useParams} from "react-router";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.scss"
import { FreeMode, Navigation, Thumbs } from "swiper";



const ItemSwiper = () => {



    const dispatch = useDispatch()
    const {product} = useSelector((store)=>store.oneItem)
    const params = useParams()



    useEffect(()=>{
        dispatch(getOneItem(params.id))

    },[])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="swiperImg-content">
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper SwiperSlide"
            >
                {product.images?.map((image)=>(
                    <SwiperSlide  key={image.id}>
                        <img  key={image.id} src={image.img} />
                    </SwiperSlide>
                ))}

            </Swiper>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                thumbs={{ swiper: thumbsSwiper }}

            >
                {product.images?.map((image)=>(
                    <SwiperSlide key={image.id} className="swiper-slide">
                        <img   key={image.id} src={image.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default ItemSwiper;