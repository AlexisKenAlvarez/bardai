import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Phase = ({phase, desc}) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 1 })
    const [circRef, circView] = useInView({ triggerOnce: true, threshold: 1 })

    const colors = ['#4285F4', '#EA4335', "#FBBC05", "#34A853"]


    return (
        <div className=' min-h-[17rem] lg:max-w-[55rem] md:max-w-[35rem] max-w-[25rem] relative md:p-10 md:px-12 mx-2 flex pl-10 py-6'>
            <div className='absolute left-0 h-full w-3 top-0 flex flex-col items-center'>
                <motion.div initial={{ scale: 0.5, opacity: 0.2 }} animate={circView ? { scale: 1, opacity: 1 } : {}} transition={{duration: 0.5}} className="w-2 h-2 rounded-full top-0" ref={circRef} style={{backgroundColor: `${colors[phase - 1]}`}}></motion.div>

                <motion.div initial={{height: "0%"}} animate={ inView ? {height: "133%"} : {}} transition={{duration: 0.5}} className="w-[2px] absolute top-0" style={ phase === "4" ? {display: "none"} : {backgroundColor: `${colors[phase - 1]}`}}></motion.div>

                <div className="ref bg-transparent w-2 h-2 bottom-[-30%] absolute " ref={ref}></div>
            </div>
            <div className=' ml-8 w-full h-full absolute top-0 left-0 bg-[#06071B] opacity-60 border-[1px] border-button z-0 shadow-glow'></div>

            <div className='relative z-10 md:ml-8 ml-5'>
                <h1 className='text-2xl font-semibold font-saira' style={{color: `${colors[phase - 1]}`}}>Phase {phase}</h1>
                <p className='font-poppins mt-6 md:text-md text-xs lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Phase