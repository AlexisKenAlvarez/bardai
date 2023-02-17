import React from 'react'
import { motion } from 'framer-motion'

const Eco = ({ title, desc }) => {

    return (
        <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 100, scale: 1}} transition={{duration: 0.5}} className=' min-h-[17rem] max-w-[34rem] relative p-10 px-12 mx-2'>
            <div className='w-full h-full absolute top-0 left-0 bg-[#06071B] opacity-60 border-[1px] border-button z-0'></div>
            <div className='relative z-10'>
                <h1 className='text-2xl font-semibold text-button font-saira'>{title}</h1>
                <p className='font-poppins mt-6 md:text-md text-xs lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </motion.div>
    )
}

export default Eco