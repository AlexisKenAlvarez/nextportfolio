import Image from 'next/image';
import { CgArrowLongUp } from 'react-icons/cg'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Underline from '../Modes/Underline';

const Footer = () => {
    const controls = useAnimation();
    const [hMessage, setHoverMessage] = useState(false)

    const [sendRef, sendView] = useInView({ triggerOnce: true })
    const [isRef, isView] = useInView({ triggerOnce: true })
    const [logoRef, logoView] = useInView({ triggerOnce: true })
    const [copyRef, copyView] = useInView({ triggerOnce: true })

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        console.log(isView)
    }, [isView])

    const variants = {
        initialLeft: {
            x: "-100%"
        },

        initialRight: {
            x: "-100%"
        },
        animateLeft: {
            x: ["-101%", "0%", "101%"],
            transition: {
                duration: 1.2,
                delay: 0.3
            }
        },
        animateRight: {
            x: ["101%", "0%", "-101%"],
            transition: {
                duration: 1.2,
                delay: 0.3
            }
        },
        none: {}
    }

    return (
        <footer className='w-full md:h-[30rem] h-[25rem] bg-white relative font-raleway overflow-hidden'>
            <div className='flex justify-between mx-auto w-[80%] md:mt-20 mt-10'>
                <div className='text-notSoBlack md:text-5xl font-extrabold text-3xl text-center w-full md:w-auto md:text-left'>
                    <div className='relative md:pb-2 pb-1 w-fit mx-auto md:mx-0 overflow-hidden'>
                        <motion.h2 initial={{ opacity: 0 }} animate={sendView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} className=" text-center">Is there a spark?</motion.h2>
                        <motion.div ref={sendRef} variants={variants} initial="initialLeft" animate={sendView ? "animateLeft" : "none"} className='absolute w-full h-full bg-mygreen top-0 z-10'></motion.div>

                    </div>
                    <div className='relative md:pb-2 pb-1 w-fit mx-auto md:mx-0 overflow-hidden'>
                        <motion.h2 initial={{ opacity: 0 }} animate={sendView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} className='mt-4'>Send me a
                            <span className='text-mygreen cursor-pointer relative z-10' onMouseEnter={() => { setHoverMessage(true) }} onMouseLeave={() => { setHoverMessage(false) }}> message.
                                <AnimatePresence>
                                    {hMessage ? <Underline /> : null}
                                </AnimatePresence>
                                <div className='bg-white w-10 h-full absolute right-[2.35rem] z-[-1] top-5 md:block hidden'></div>
                            </span>
                        </motion.h2>
                        <motion.div ref={sendRef} variants={variants} initial="initialLeft" animate={sendView ? "animateLeft" : "none"} className='absolute h-full bg-mygreen top-0 z-10 w-full'></motion.div>
                    </div>

                </div>
                <div className='relative items-center h-fit text-3xl font-bold text-notSoBlack w-fit md:flex hidden overflow-hidden pb-4'>
                    <motion.p initial={{ opacity: 0 }} animate={isView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} className='peer cursor-pointer' onClick={scrollToTop}>Top</motion.p>
                    <div className='bg-mygreen peer-hover:w-[4.8rem] h-[0.2rem] absolute bottom-2 mx-auto left-auto right-auto w-0 transition-all ease-in-out duration-500 origin-center'></div>
                    <CgArrowLongUp className='rotate-180 peer-hover:rotate-0 transition-all ease-in-out duration-500 opacity-0 peer-hover:opacity-100 pointer-events-none' />
                    <motion.div ref={isRef} variants={variants} initial="initialRight" animate={isView ? "animateRight" : "none"} className='absolute w-full h-full bg-mygreen top-0 z-10'></motion.div>

                </div>
            </div>

            <div className='flex md:justify-between mx-auto w-[80%] absolute lg:bottom-10 left-0 right-0 h-fit bottom-16 flex-col md:flex-row items-center md:items-start'>
                <div className='flex items-center w-fit cursor-pointer mb-10 md:mb-0'>
                    <div className="relative overflow-hidden">
                        <motion.div initial={{ opacity: 0 }} animate={logoView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} className='flex items-center' onClick={scrollToTop}>
                            <Image src="/icon.webp" alt="Logo" width="34" height="34" className=' h-auto dark:invert w-[3rem] md:w-auto' />
                            <p className='font-quicksand font-medium ml-4 hover:text-mygreen transition-all ease-in-out dark:text-white dark:hover:text-lightg hidden md:block'>alvarez.portfolio&#40;&#41;</p>
                        </motion.div>

                        <motion.div ref={logoRef} variants={variants} initial="initialLeft" animate={logoView ? "animateLeft" : "none"} className='absolute w-full h-full bg-mygreen top-0 z-10'></motion.div>
                    </div>

                </div>
                <div className='self-end relative mx-auto md:mx-0 overflow-hidden'>
                    <motion.p initial={{ opacity: 0 }} animate={copyView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} className='font-quicksand text-center md:text-left text-sm md:text-md w-full md:w-fit'>© 2023 | Made with ❤ by Alexis Ken Alvarez</motion.p>
                    <motion.div ref={copyRef} variants={variants} initial="initialRight" animate={copyView ? "animateRight" : "none"} className='absolute w-full h-full bg-mygreen top-0 z-10'></motion.div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;