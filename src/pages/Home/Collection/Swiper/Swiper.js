import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";
import {Link} from "react-router-dom";




export default function SwiperFunc() {
    return (
        <>
            <Swiper slidesPerView={4}  autoplay={{delay: 2500, disableOnInteraction: false}} spaceBetween={15} loop={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <div className="swiper__card">
                            <img  src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470473_alternate10?$rl_df_pdp_5_7_a10$" alt=""/>
                        <p className="swiper__txt">Футболки и топы
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__card">
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470105_alternate10?$rl_df_pdp_5_7_a10$" alt=""/>
                        <p className="swiper__txt">Юбки</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__card">
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470215_alternate10?$rl_df_pdp_5_7_a10$" alt=""/>
                        <p className="swiper__txt">Платья</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__card">
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470243_alternate1?$rl_df_pdp_5_7$" alt=""/>
                        <p className="swiper__txt">Рубашки и блузы
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__card">
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1457384_alternate1?$rl_df_pdp_5_7$" alt=""/>
                        <p className="swiper__txt">Пальто
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__card">
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1470514_alternate1?$rl_df_pdp_5_7$" alt=""/>
                        <p className="swiper__txt">Пуховики и жилеты

                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__card">
                        <img src="https://www.rlmedia.io/is/image/PoloGSI/s7-1461622_alternate10?$rl_df_pdp_5_7_a10$" alt=""/>
                        <p className="swiper__txt">Юбки

                        </p>
                    </div>

                </SwiperSlide>
            </Swiper>
        </>
    );
}

