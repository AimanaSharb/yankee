import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {changeType, getShop} from "../../../../redux/reducers/shop"
import {Link} from "react-router-dom";






export default function SwiperFunc() {

    const dispatch = useDispatch()
    const {filter} = useSelector(store=> store.shop)

    useEffect(()=>{
        getShop(filter.type)
    }, [filter.type])

    return (
        <>
            <Swiper slidesPerView={4}   spaceBetween={15} loop={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper5">
                <SwiperSlide>
                    <Link to={'/catalog'} className="swiper__card" onClick={()=>dispatch(changeType('t-shirt'))}>
                            <img  src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470473_alternate10?$rl_df_pdp_5_7_a10$" alt=""/>
                        <p className="swiper__txt" >Футболки и топы
                        </p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link  to={'/catalog'} className="swiper__card" onClick={()=>dispatch(changeType('skirt'))} >
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470105_alternate10?$rl_df_pdp_5_7_a10$" alt=""/>
                        <p className="swiper__txt">Юбки</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link  to={'/catalog'} className="swiper__card" onClick={()=>dispatch(changeType('dress'))} >
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470215_alternate10?$rl_df_pdp_5_7_a10$" alt=""/>
                        <p className="swiper__txt">Платья</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link  to={'/catalog'} className="swiper__card" onClick={()=>dispatch(changeType('top'))} >
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470243_alternate1?$rl_df_pdp_5_7$" alt=""/>
                        <p className="swiper__txt">Рубашки и блузы
                        </p>
                    </Link>

                </SwiperSlide>
                <SwiperSlide>
                    <Link  to={'/catalog'} className="swiper__card" onClick={()=>dispatch(changeType('coat'))} >
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1457384_alternate1?$rl_df_pdp_5_7$" alt=""/>
                        <p className="swiper__txt">Пальто
                        </p>
                    </Link>

                </SwiperSlide>
                <SwiperSlide>
                    <Link  to={'/catalog'} className="swiper__card" onClick={()=>dispatch(changeType('jacket'))} >
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470514_alternate1?$rl_df_pdp_5_7$" alt=""/>
                        <p className="swiper__txt">Пуховики и жилеты

                        </p>
                    </Link>

                </SwiperSlide>
            </Swiper>
        </>
    );
}

