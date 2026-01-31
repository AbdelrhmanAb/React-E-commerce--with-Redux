import React, { useEffect } from 'react'

// REDUX import
import { useSelector, useDispatch } from 'react-redux'
import { addToCard, } from '../feature/getProductData/getData'
import { FetchProductsDate } from '../feature/getProductData/getData';
//-----------

// SWIPR import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { toast } from "react-toastify";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

//-----------------------

//  Media import
import heroImg_1 from '../assets/images/headphone.833a629bef903b002d42.png';
import heroImg_2 from '../assets/images/hero-img.d2a94bcb6808ba269a25.png';
import heroImg_3 from '../assets/images/watch-07.ab34f22bd9bf81f6c7b7.png';
import heroImg_4 from '../assets/images/تنزيل.png';

import { ShieldHalf, User, Star, Heart } from "lucide-react";
import Rating from '../components/rating';


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




    // redux code
    const dispatch = useDispatch()

    const productsData = useSelector((state) => { return (state.productDate.products); }) || []
    const handleAddToCard = (product) => {
        dispatch(addToCard(product))
        toast.success("Added to cart 🛒");


    }


    React.useEffect(() => {
        dispatch(FetchProductsDate())
        dispatch(addToCard())
    }, [])



    return (

        <main className='bg-white mt-16'>
            {/* //////// SLIDER //////// */}
            <div className="w-full md:h-screen">
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
                                <div className="flex flex-col-reverse md:flex-row  items-center justify-between md:px-16 px-6 w-full  h-full  bg-gray-100 rounded-lg">
                                    <div className='md:w-1/2 flex flex-col gap-4'>
                                        <h5 className='md:text-5xl text-2xl text-blue-950  '>{item.offer}</h5>
                                        <p className='text-cyan-950 md:text-lg text-sm '>{item.discribtion}</p>
                                        <button className="btn btn-primary">Primary</button>
                                    </div>
                                    <img src={item.img} alt={item.name} className="md:h-2/3 h-1/2 object-contain md:mb-4" />
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
                <div className='w-full bg-primary-content h-auto  flex flex-col md:flex-row gap-3 items-center justify-evenly py-14 mt-9' >
                    {items.map((item) => {
                        const Icon = item.icon

                        return (

                            <div key={item.id} className='h-48  md:w-1/5 w-2/3 rounded-4xl bg-primary flex flex-col pt-2 gap-3 text-primary-content items-center'>

                                <span >< Icon size={"2.6rem"} /></span>
                                <p className='text-2xl'>{item.name}</p>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                        )
                    })}

                </div>
            </section>
            {/* CARDS SEC-2 */}

            {/*////////////////// SEC-3 BIGCOUNT /////////////// */}
            <section>
                <div className='py-12 flex flex-col items-center rounded-2xl  w-full bg-neutral-content' >
                    <h3 className='text-5xl text-accent font-bold capitalize'>shop</h3>

                    <div className=' flex justify-center mt-6 w-full' >
                        <div className="divider divider-neutral h-1 w-1/3 text-accent  ">NEW </div>
                    </div>


                    {/* --------- Products from api ------------ */}
                    <div className='w-3/4 grid mt-38 md:grid-cols-3 grid-cols-1 gap-12 items-start  ' >
                        {productsData.map((item) => {
                            return (
                                <div style={{ maxHeight: "550px" }} key={item.id} className="card gap-3 transition-all hover:scale-105 hover:shadow-2xl  bg-primary-content text-neutral shadow-sm">
                                    <figure className=' w-full  max-h-2/5'>
                                        <img
                                            className='scale-50'
                                            src={item.image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 style={{ height: "80px" }} className="card-title overflow-hidden">{item.title}</h2>
                                        {/* <p style={{ height: "120px" }} className='  overflow-hidden'>{item.description}</p> */}
                                        <div className="flex flex-col text-lg w-full items- my-3 justify-center">
                                            <p><span className='font-bold mr-1.5'> category:</span>{item.category}</p>
                                            <p><span className='font-bold'> price:</span>12.3</p>
                                            <div className='flex items-center'>
                                                <span className='font-bold'>Rating:</span> <Rating value={item.rating.rate} />
                                            </div>

                                        </div>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => { handleAddToCard(item) }}

                                                className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>)

                        })}
                    </div>
                    {/* --------- Products from api ------------ */}
                </div>
            </section>

            {/*////////////////// SEC-3 BIGCOUNT /////////////// */}

        </main>
    )
}

export default Home