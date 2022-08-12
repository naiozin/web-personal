import React from 'react';
import './Testimonials.css';
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: 'Victoria Secret',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolores illum neque ea, unde ipsam magnam voluptatum sint voluptatibus, mollitia quis placeat quas accusamus ipsum adipisci molestias eaque eius odio?'
  },
  {
    avatar: avatar2,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolores illum neque ea, unde ipsam magnam voluptatum sint voluptatibus, mollitia quis placeat quas accusamus ipsum adipisci molestias eaque eius odio?'
  },
  {
    avatar: avatar3,
    name: 'Jason Borne',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolores illum neque ea, unde ipsam magnam voluptatum sint voluptatibus, mollitia quis placeat quas accusamus ipsum adipisci molestias eaque eius odio?'
  },
  {
    avatar: avatar4,
    name: 'Emma Watson',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolores illum neque ea, unde ipsam magnam voluptatum sint voluptatibus, mollitia quis placeat quas accusamus ipsum adipisci molestias eaque eius odio?'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Comentarios de clientes</h5>
      <h2>Opiniones</h2>

      <Swiper className="container testimonials__container"       
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials