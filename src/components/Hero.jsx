import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Typewriter from "typewriter-effect"
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <>
            <Parallax speed={-50}>
                <section className='w-full h-screen bg-hero relative text-white overflow-hidden'>
                    <motion.img initial={{ y: 200}} animate={{ y: 0 }} transition={{ duration: 1 }} alt="HeroRobot" src="/hero.webp" className='absolute bottom-0 lg:right-0 h-full z-0 right-[-15rem] lg:opacity-100 opacity-30 brightness-50 lg:brightness-100  min-w-[45rem]'></motion.img>

                    <div className='w-full max-w-[1700px] mx-auto flex items-center h-full lg:px-20 z-10 relative text-center lg:text-left justify-center lg:justify-start'>
                        <div>
                            <motion.h1 initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1 }} className='font-saira lg:text-8xl font-black text-5xl'>
                                <span className='text-gblue'>B</span>
                                <span className='text-gred'>A</span>
                                <span className='text-gorange'>R</span>
                                <span className='text-ggreen'>D </span>

                                
                                 AI</motion.h1>
                            <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.05 }} className='flex lg:text-3xl text-xl font-bold font-saira gap-x-[7px] mx-auto w-fit lg:mx-0 lg:w-auto min-w-[22rem] items-center justify-center lg:justify-start'>
                                <h2 className=''>For high quality solutions</h2>
                            </motion.div>

                            <motion.p initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.1 }} className='mt-7 xl:max-w-[40rem] lg:max-w-[30rem] max-w-[40rem] font-poppins lg:text-md text-sm px-10 lg:px-0 2xl:text-lg'>As you are likely aware, Google has recently announced the forthcoming launch of their ChatGPT artificial intelligence competitor, dubbed "Bard." This initiative, built on the Ethereum Blockchain, leverages Google's cutting-edge AI technology to create compelling AI bots for use on popular platforms such as Telegram and Discord. It is anticipated that this will become the largest AI token on the Ethereum network, reflecting the vibrant and innovative nature of AI technology. We believe that our efforts in the cryptocurrency space will be recognized by Google as a valuable contribution to their ongoing work in this field.</motion.p>

                            <motion.button initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='bg-button px-12 py-3 w-fit h-fit rounded-lg mt-10 hover:bg-[#040B9E] cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0'>
                                <p>Get started</p>
                            </motion.button>
                        </div>
                    </div>
                </section>
            </Parallax>

        </>



    )
}

export default Hero