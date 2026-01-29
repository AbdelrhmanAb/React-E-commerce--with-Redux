import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import heroImg_1 from '../assets/images/headphone.833a629bef903b002d42.png';
import heroImg_2 from '../assets/images/hero-img.d2a94bcb6808ba269a25.png';
import heroImg_3 from '../assets/images/watch-07.ab34f22bd9bf81f6c7b7.png';
import heroImg_4 from '../assets/images/تنزيل.png';

import { ShieldHalf, User, Star, Heart } from "lucide-react";


const products = [
    {
        id: 1,
        offer: "75% Off For Your First Shopping",
        img: heroImg_2,
        discribtion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    },
    {
        id: 2,
        offer: "50% Off On Smartphones",
        img: heroImg_4,
        discribtion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    },
    {
        id: 3,
        offer: "30% Off On Headphones",
        img: heroImg_1,
        discribtion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    },
    {
        id: 4,
        offer: "20% Off On Smart Watches",
        img: heroImg_3,
        discribtion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    },
];



const items = [
    {
        id: 1,
        name: "Abdo Ahmed",
        icon: ShieldHalf,
        description: "Frontend developer with React skills"
    },
    {
        id: 2,

        name: "Mohamed Ali",
        icon: User,
        description: "Passionate about clean UI design"
    },
    {
        id: 3,

        name: "Sara Hassan",
        icon: Star,
        description: "Creative thinker and problem solver"
    },
    {
        id: 4,

        name: "Omar Adel",
        icon: Heart,
        description: "Loves building modern web apps"
    }
];


const Home = () => {
    return (

        <main className='bg-white'>
            {/* //////// SLIDER //////// */}
            <div className="w-screen h-screen">
                <div className="w-full h-full ">
                    <Swiper
                        // style={{height:"100vh"}}
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 2500 }}
                        pagination={{ clickable: true }}
                        navigation
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        className=" bg-white container w-full h-12/12"
                    >
                        {products.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex  items-center justify-between px-16 w-full  h-full  bg-gray-100 rounded-lg">
                                    <div className='w-1/2 flex flex-col gap-4'>
                                        <h5 className='text-5xl text-blue-950  '>{item.offer}</h5>
                                        <p className='text-cyan-950'>{item.discribtion}</p>
                                        <button className="btn btn-primary">Primary</button>
                                    </div>
                                    <img src={item.img} alt={item.name} className="h-2/3 object-contain mb-4" />
                                    {/* <h2 className="text-xl font-bold">{item.name}</h2> */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* //////// SLIDER //////// */}


            {/* CARDS SEC-2 */}
            <section>
                <div className='w-full bg-primary-content h-72 flex flex-col md:flex-row items-center justify-evenly' >
                    {items.map((item) => {
                        const Icon = item.icon
                        return (

                            <div key={item.id} className='h-2/3 w-1/5 rounded-4xl bg-primary flex flex-col pt-2 gap-3 text-primary-content items-center'>

                                <span >< Icon size={"2.6rem"} /></span>
                                <p>{item.name}</p>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                        )
                    })}

                </div>
            </section>
            {/* CARDS SEC-2 */}

            {/*////////////////// SEC-3 BIGCOUNT /////////////// */}
            <section>
                <div className='pt-12 flex flex-col items-center rounded-2xl mt-38 w-screen bg-neutral-content' >
                    <h3 className='text-5xl text-accent font-bold'>big discound</h3>

                    <div className=' flex justify-center mt-6 w-full' >
                        <div className="divider divider-neutral h-1 w-1/3 text-accent  ">NEW </div>
                    </div>


                    {/* --------- Products from api ------------ */}
                    <div className='w-full h-screen' ></div>
                    {/* --------- Products from api ------------ */}
                </div>
            </section>
            {/*////////////////// SEC-3 BIGCOUNT /////////////// */}

        </main>
    )
}

export default Home