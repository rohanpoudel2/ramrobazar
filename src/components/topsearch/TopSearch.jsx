import Category from '../category/Category';
import './topsearch.scss';
import RssFeedIcon from '@mui/icons-material/RssFeed';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";


const TopSearch = () => {
  return (
    <>
      <div className="topsearch">
        <div className="left">
          Top Searches
        </div>
        <div className="middle">
          <Swiper
            slidesPerView={6}
            spaceBetween={1}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
            <SwiperSlide> <Category /></SwiperSlide>
          </Swiper>

        </div>
        <div className="right">
          <RssFeedIcon />
          RamroBlog
        </div>
      </div>
    </>
  )
}

export default TopSearch