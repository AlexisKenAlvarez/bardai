import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import Eco from '../utils/Eco'

const Ecosystem = () => {

    const [botRef, botView] = useInView({ triggerOnce: true, threshold: 0.7 })

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <section className='w-full h-auto bg-myblack shadow-eco text-white pb-[13rem] z-9' >
            <div className="w-full mx-auto max-w-[1700px]" id="ecosystem" >
                <Parallax translateY={[0, -100]} className="px-10">
                    <div className='max-w-[55rem] 2xl:max-w-[65rem] w-full border-[1px] border-myborder rounded-xl mx-auto lg:p-12 p-8 pb-20 relative bg-aboutbg' ref={botRef}>
                        <div className='relative z-10'>
                            <h1 className='font-saira text-3xl text-header font-semibold text-elft uppercase'>ABOUT
                                <span className='text-gblue'> B</span>
                                <span className='text-gred'>A</span>
                                <span className='text-gorange'>R</span>
                                <span className='text-ggreen'>D </span></h1>
                            <p className='text-left lg:mt-4 mt-5 max-w-[30rem] 2xl:max-w-[35rem] text-sm lg:text-md 2xl:text-lg font-poppins'>BardAI is a blockchain-based project that aims to create an open-ended and decentralized platform for creative collaboration and sharing. It utilizes smart contracts and distributed ledger technologies to create an incentivized, trustless, and secure environment for creatives to develop projects, connect and collaborate with peers, and receive compensation for their work. <br/> <br/>
                            
                            BardAI seeks to foster an environment where creatives from all over the world can contribute and benefit from the contributions of others, enabling individuals to break through traditional barriers of geography and technology to work together on shared projects.</p>
                        </div>


                        <motion.img initial={{ opacity: 0 }} animate={botView ? { opacity: 100, y: [150, 0] } : {}} transition={{ duration: 0.7 }} src="/about.webp" alt="About" className="absolute lg:bottom-[-10rem] lg:right-[-4rem] lg:w-[30rem] w-[18rem] bottom-2 right-0 brightness-[0.3] lg:brightness-100" />
                    </div>


                </Parallax>

                <div className='w-full h-[100vh] py-20 relative pt-20 bg-eco lg:bg-[length:100%_100%] bg-[length:55rem_100%] bg-center bg-no-repeat bg-myblack'>
                    <div className='relative z-10 px-10'>
                        <h1 className='font-saia text-5xl text-center font-bold uppercase mb-[10rem]'>
                            <span className='text-gblue'>E</span>
                            <span className='text-gred'>C</span>
                            <span className='text-gorange'>O</span>
                            system</h1>

                        <Parallax translateY={[30, -30]}>
                            <div className='mx-auto mt-10 lg:max-w-[67rem] max-w-[35rem]'>
                                <Slider {...settings}>
                                    <Eco title="1. Lorem Ipsum" />
                                    <Eco title="2. Lorem Ipsum" />
                                    <Eco title="3. Lorem Ipsum" />
                                    <Eco title="4. Lorem Ipsum" />
                                    <Eco title="5. Lorem Ipsum" />
                                    <Eco title="6. Lorem Ipsum" />
                                </Slider>
                            </div>
                        </Parallax>



                    </div>

                </div>



            </div>

        </section>
    )
}

export default Ecosystem