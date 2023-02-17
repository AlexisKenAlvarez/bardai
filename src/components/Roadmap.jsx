import React from 'react'
import Phase from '../templates/Phase'

const Roadmap = () => {
    return (
        <section className='w-full h-auto py-20 bg-myblack text-white'>

            <h1 className='md:text-6xl text-4xl font-bold uppercase text-center mb-20'>
                <span className='text-gblue'>R</span>
                <span className='text-gred'>O</span>
                <span className='text-gorange'>A</span>
                <span className='text-ggreen'>D</span>
                map
            </h1>

            <div className='mx-auto max-w-[1700px] w-full flex items-center justify-center pr-10 pl-4 flex-col gap-y-24'>

                <Phase phase="1" />
                <Phase phase="2" />
                <Phase phase="3" />
                <Phase phase="4" />



            </div>
        </section>
    )
}

export default Roadmap