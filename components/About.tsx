import { FunctionComponent } from 'react'
import { info1, info2 } from '../utils/ObjectList';
import Projects from './Projects';
import Skills from './Skills';
import { useInView } from "react-intersection-observer";
import { motion, } from "framer-motion"

const About: FunctionComponent = () => {

    const [aboutRef, aboutView] = useInView({ triggerOnce: true })

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
        <div className="h-fit w-full relative z-[1]">
            <div className="w-full max-w-[1600px] mx-auto">
                <div className="w-[80%] xl:w-[72%] lg:w-[80%] mx-auto">
                    <div className="flex justify-between dark:text-white">
                        <div className='relative overflow-hidden' ref={aboutRef}>
                            <motion.div initial={{ opacity: 0 }} animate={aboutView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }}>
                                <h1 className="font-quicksand text-mygreen font-semibold text-lg dark:text-lightg">About</h1>
                                <h2 className="text-2xl font-raleway font-semibold text-notSoBlack dark:text-white">Everything you need to know</h2>
                            </motion.div>

                            <motion.div className='absolute w-full h-full bg-mygreen top-0' variants={variants} initial="initialLeft" animate={aboutView ? "animateLeft" : "none"} ></motion.div>
                        </div>

                        <div className='relative overflow-hidden flex'>
                            <motion.h2  initial={{ opacity: 0 }} animate={aboutView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} className="text-2xl font-raleway font-semibold hidden lg:block text-notSoBlack dark:text-white self-end">Years of experience</motion.h2>
                            <motion.div className='absolute w-full h-full bg-mygreen top-0' variants={variants} initial="initialRight" animate={aboutView ? "animateRight" : "none"} ></motion.div>
                        </div>
                        
                    </div>
                    <div className="sm:flex sm:gap-3">
                        <div className="border-[1px] border-black shadow-forBox h-fit flex flex-col gap-y-10 p-5 pb-[2.3rem] dark:pb-[1.3rem] mt-5 w-full max-w-[360px] sm:max-w-[1600px] xl:flex-row lg:pl-14 xl:gap-x-16 2xl:gap-x-32 dark:border-darkwhite dark:border-8 dark:bg-[#DCDCDC] dark:shadow-dark border-box">

                            <div className="font-raleway font-medium mt-6">
                                {info1.map(details => {
                                    return (
                                        <div key={details.id} className="flex mb-3 xl:mb-[35px]">
                                            <p className="w-[5.8rem] opacity-70 dark:opacity-100 font-bold dark:text-[#649f5b]">{details.label}: </p>
                                            <p className="ml-3 text-mygreen dark:text-black">{details.value}</p>
                                        </div>
                                    )
                                })
                                }

                            </div>

                            <div className="font-raleway font-medium mt-6">
                                {info2.map(details => {
                                    return (
                                        <div key={details.id} className="flex mb-3 xl:mb-[35px]">
                                            <p className="w-[7rem] opacity-70 dark:text-[#649f5b] dark:opacity-100 font-bold">{details.label}: </p>
                                            <p className="ml-3 text-mygreen w-[12rem] dark:text-black">{details.value}</p>
                                        </div>
                                    )
                                })
                                }
                            </div>

                        </div>
                        <div className="flex flex-col sm:flex-col-reverse lg:flex-col">
                            <h2 className="text-2xl font-raleway font-semibold lg:hidden mt-10 sm:text-right sm:w-[11rem] dark:text-white">Years of experience</h2>
                            <div className="flex gap-x-2 font-raleway text-center mt-5 sm:flex-col sm:gap-y-3">
                                <div className="border-[1px] border-black shadow-forBox h-fit py-10 w-[11rem] dark:py-[2.1rem] dark:border-darkwhite dark:border-8 dark:bg-[#DCDCDC] dark:shadow-dark">
                                    <h1 className="text-5xl mb-7 font-semibold text-mygreen dark:text-[#649f5b]">3+</h1>
                                    <p className='dark:text-black font-semibold text-grey'>HTML, CSS, JS</p>
                                </div>
                                <div className="border-[1px] border-black shadow-forBox h-fit py-10 w-[11rem] dark:py-[2.1rem] dark:border-darkwhite dark:border-8 dark:bg-[#DCDCDC] dark:shadow-dark">
                                    <h1 className="text-5xl mb-7 font-semibold text-mygreen dark:text-[#649f5b]">1+</h1>
                                    <p className='dark:text-black  font-semibold text-grey'>React/NextJS</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SKILLS */}
                <Skills />

            </div>

            <Projects />
        </div>
    );
}

export default About;

