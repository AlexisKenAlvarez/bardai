import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='w-full h-auto flex items-center justify-center relative overflow-hidden py-20'>
            <div className='max-w-[1700px] w-full mx-auto flex items-center justify-around px-8 md:flex-row flex-col'>
                <img alt="Logo" src="/logo.webp" className='w-[10rem]'></img>
                <div className='text-white font-saira text-center md:text-left'>
                    <h1 className='text-4xl font-bold mt-8 lg:mt-0'>Social links</h1>
                    <div className='flex mt-3 gap-x-4 text-xl w-fit mx-auto md:mx-0'>
                        <SiTwitter className='hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-card cursor-pointer' />
                        <FaTelegramPlane className='hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-card cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='w-full h-9 absolute bottom-2 bg-card flex items-center justify-center font-poppins lg:text-md sm:text-sm text-xs text-white'>
                All Rights Reserved © Bard AI 2023.
            </div>
        </section>
    )
}

export default Footer