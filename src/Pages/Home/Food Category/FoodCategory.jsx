import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const FoodCategory = () => {
    return (
        <section className='mx-3'>
            <div className="mb-10">
                <SectionTitle
                    heading={'From 11:00am to 10:00pm'}
                    subHeading={'ORDER ONLINE'}
                ></SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={'/slide1.webp'} className='w-full' alt='salad' />
                    <h3 className='md:text-4xl text-center text-white -mt-12 md:-mt-20 mb-20 font-cinzel'>SALADS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'/slide2.webp'} className='w-full' alt='pizza' />
                    <h3 className='md:text-4xl text-center text-white -mt-12 md:-mt-20 font-cinzel'>PIZZAS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'/slide3.webp'} className='w-full' alt='soup' />
                    <h3 className='md:text-4xl text-center text-white -mt-12 md:-mt-20 font-cinzel'>SOUPS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'/slide4.webp'} className='w-full' alt='dessert' />
                    <h3 className='text-xs sm:text-base md:text-4xl text-center text-white -mt-12 md:-mt-20 font-cinzel'>DESSERTS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'/slide5.webp'} className='w-full' alt='drinks' />
                    <h3 className='md:text-4xl text-center text-white -mt-12 md:-mt-20 font-cinzel'>DRINKS</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default FoodCategory;