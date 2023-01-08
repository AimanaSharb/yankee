import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../../../assets/Home/Rectangle 7.png"
import img2 from "../../../../assets/Home/Rectangle 9.png"
import img3 from "../../../../assets/Home/Rectangle 10.png"
import img4 from "../../../../assets/Home/Rectangle 11.png"

import { Navigation } from "swiper";
import SwiperCards from "../SwiperCards/SwiperCards";

export default function SwiperFunc() {
    return (
        <>
            <Swiper slidesPerView={4} spaceBetween={15} loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><SwiperCards/></SwiperSlide>
                <SwiperSlide><SwiperCards/></SwiperSlide>
                <SwiperSlide><SwiperCards/></SwiperSlide>
                <SwiperSlide><SwiperCards/></SwiperSlide>
            </Swiper>
        </>
    );
}
