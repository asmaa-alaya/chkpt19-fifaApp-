import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";



const Carou = (props) => {
  const pagination = {
    clickable: true,

  };
  return (


    <section className='players_list'>
      <div className='title'>Golden Team</div>
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnIneteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{

          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,

        }}
        pagination={pagination}

        className="mySwiper"
      >
        {props.players.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.img} />
            <h1>{el.name}</h1>
            <h2>{el.position}</h2>

            <h2> {el.team} </h2>
            <p> {el.infos} </p>

          </SwiperSlide>

        ))}
      </Swiper>
    </section>

  );
};

export default Carou;
