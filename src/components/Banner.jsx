import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full h-[90vh]" src="https://i.postimg.cc/W3D30KLW/remedy-lecture-bg-1.jpg"/></SwiperSlide>
        <SwiperSlide><img className="w-full h-[90vh]" src="https://i.postimg.cc/PqVJpHcv/remedy-lecture-bg-2.jpg"/></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
