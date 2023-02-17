import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Tokenomics = () => {
    const [count, setCount] = useState(0)
    const [tokenref, tokenview] = useInView({ triggerOnce: true, threshold: 1 })

    useEffect(() => {

        if (tokenview) {
            setTimeout(() => {
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        setCount(val => val + 1)
                    }, i * 200)
                }
            }, 500)

        }

    }, [tokenview])


    return (
        <section className='w-full h-auto bg-myblack font-saira flex flex-around items-center px-10 text-white lg:flex-row flex-col overflow-hidden'>
            <div className='w-full flex items-center justify-center'>
                <div className='w-fit'>
                    <h1 className='md:text-6xl text-4xl font-bold uppercase'>
                        <span className='text-gblue'>T</span>
                        <span className='text-gred'>O</span>
                        <span className='text-gorange'>K</span>
                        <span className='text-ggreen'>E</span>
                        <span className='text-gred'>N</span>
                        omics</h1>
                    <div className="flex items-center mt-5 gap-x-3 w-fit mx-auto">
                        <h2 className='text-6xl font-bold' ref={tokenref}>{count}%</h2>
                        <h3 className='text-white text-3xl opacity-50 font-semibold'>Total Tax</h3>
                    </div>
                </div>


            </div>
            <motion.img initial={{opacity: 0, scale: 0.5, y: 200, rotateY: 360}} animate={ tokenview ?  {opacity: 100, scale: 1, y: 0, rotateY: 0} : {}} transition={{duration: 0.6, delay: 0.1}} src="/coin.webp" alt="Coin" className="w-[70vh]" />
        </section>
    )
}

export default Tokenomics