import { FunctionComponent } from 'react'
import { current, other } from '../utils/ObjectList';
import { useInView, useAnimation, motion, delay } from "framer-motion"
import { useRef, useEffect, useState } from 'react';
import { genRandom } from '../utils/UsefulFunctions';

const Skills: FunctionComponent = () => {

    const textDiv = useRef(null)
    const inView = useInView(textDiv, { once: true })
    const introAnimation = useAnimation()

    const currentItems = useRef(null)
    const currentView = useInView(currentItems, { once: true })

    const otherItems = useRef(null)
    const otherView = useInView(otherItems, { once: true })

    return (
        <>
            <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto mt-36'>

                <motion.div animate={introAnimation} ref={textDiv}>
                    <h2 className="font-quicksand text-mygreen font-semibold text-lg dark:text-lightg">Skills</h2>
                    <h1 className='dark:text-white text-4xl font-raleway font-semibold'>Current Stack</h1>

                    <div className='w-[8rem] h-[2px] bg-grey dark:bg-darkwhite'>
                        <div className='clip-path-underline w-14 h-16 bg-grey mt-1 dark:bg-darkwhite'></div>
                    </div>
                </motion.div>



                <div className="w-full h-auto grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-y-7 max-w-[300px] sm:max-w-[500px] sm:gap-y-10 sm:grid-cols-3 sm:grid-rows-2 md:max-w-[700px] md:grid-cols-4 lg:max-w-full lg:grid-cols-5 lg:grid-rows-1 mx-auto mt-12">
                    {current.map((items, index) => {
                        return (
                            <motion.div initial={{ y: 50, opacity: 0 }} animate={currentView ? { y: 0, opacity: 1 } : {}}
                                transition={{ delay: index * 0.16, duration: 0.7, ease: [.21, 1.03, .27, 1] }} className='h-[10rem] w-[7rem] xl:w-[9.5rem] relative' key={items.id}>
                                <div className='group peer w-full h-[60%] flex justify-center items-center cursor-pointer'>
                                    <div className='w-fit h-fit relative group-hover:mt-[-1.5rem] z-8 z-10 transition-all ease-in-out select-none'>
                                        {items.image}
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='mx-auto w-full border-t-2 border-black mt-0 shadow-forBox dark:border-darkwhite'></div>
                                    <div className='mx-auto w-[50%] border-t-2 border-mygreen mt-2 shadow-forBox dark:border-lightg'></div>
                                    <div className='mx-auto w-[20%] border-t-2 border-mygreen mt-2 shadow-forBox dark:border-lightg'></div>
                                </div>
                                <p className='absolute bottom-[-1rem] w-full text-center font-quicksand font-semibold text-grey select-none peer-hover:text-mygreen peer-hover:font-bold transition-all ease-in-out' ref={currentItems}>{items.name}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto mt-36'>
                <h2 className="text-4xl font-raleway font-semibold text-center dark:text-white">Other Skills</h2>



                <div className="w-full h-auto grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-y-9 max-w-[300px] sm:max-w-[500px] sm:gap-y-10 sm:grid-cols-3 sm:grid-rows-2 md:max-w-[700px] md:grid-cols-4 lg:gap-y-16  lg:max-w-full lg:grid-cols-5 lg:grid-rows-1 mx-auto mt-20 relative">
                    <div className='bg-transparent absolute w-5 h-5 top-0 mt-[25rem]' ref={otherItems}></div>
                    {other.map((items, index) => {
                        return (
                            <motion.div initial={{ y: 50, opacity: 0 }} animate={otherView ? { y: 0, opacity: 1 } : {}}
                                transition={{ delay: index * 0.08, duration: 0.7, ease: [.21, 1.03, .27, 1] }} className='h-[10rem] w-[7rem] xl:w-[9.5rem] relative' key={items.id}>
                                <div className=' group w-full h-[60%] flex justify-center items-center select-none peer cursor-pointer'>
                                    <div className='w-fit h-fit relative group-hover:mt-[-1.5rem] z-8 z-10 transition-all ease-in-out select-none'>
                                        {items.image}
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='mx-auto w-full border-t-2 border-black mt-0 shadow-forBox dark:border-darkwhite'></div>
                                    <div className='mx-auto w-[50%] border-t-2 border-mygreen mt-2 shadow-forBox dark:border-lightg'></div>
                                    <div className='mx-auto w-[20%] border-t-2 border-mygreen mt-2 shadow-forBox dark:border-lightg'></div>
                                </div>
                                <p className='absolute bottom-[-1rem] w-full text-center font-quicksand font-semibold text-grey select-none peer-hover:text-mygreen peer-hover:font-bold transition-all ease-in-out'>{items.name}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Skills;