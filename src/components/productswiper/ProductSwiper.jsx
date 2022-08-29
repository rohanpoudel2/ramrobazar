import SwiperProductCard from '../swiperproductcard/SwiperProductCard';
import './productswiper.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSwiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="productswiper">
      <Slider {...settings}>
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
        <SwiperProductCard />
      </Slider>
    </div>
  )
}

export default ProductSwiper