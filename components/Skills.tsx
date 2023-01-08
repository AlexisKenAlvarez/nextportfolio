import { FunctionComponent } from 'react'
import { current, other } from '../utils/ObjectList';
import { motion, } from "framer-motion"
import { useInView } from "react-intersection-observer";


const Skills: FunctionComponent = () => {

    const [cTextRef, cTextView] = useInView({ triggerOnce: true })
    const [oTextRef, oTextView] = useInView({ triggerOnce: true })

    const [currentItems, currentView] = useInView({ triggerOnce: true })
    const [otherItems, otherView] = useInView({ triggerOnce: true })

    const variants = {
        initial: {
            x: "-100%"
        },

        animate: {
            x: ["-101%", "0%", "101%"],
            transition: {
                duration: 1.2,
                delay: 0.3
            }
        },
    }

    return (
        <>
            <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto mt-36'>

                <div className="relative w-fit overflow-hidden" ref={cTextRef} >
                    <motion.div initial={{ opacity: 0 }} animate={cTextView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} >
                        <h2 className="font-quicksand text-mygreen font-bold text-lg dark:text-lightg">Skills</h2>
                        <h1 className='dark:text-white text-5xl font-raleway font-extrabold text-notSoBlack'>Current Stack</h1>
                    </motion.div>

                    <motion.div className='absolute w-full h-full bg-mygreen top-0 dark:bg-lightg' variants={variants} initial="initial" animate={cTextView ? "animate" : "none"} ></motion.div>
                </div>

                <div className="w-full h-auto grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-y-7 max-w-[300px] sm:max-w-[500px] sm:gap-y-10 sm:grid-cols-3 sm:grid-rows-2 md:max-w-[700px] md:grid-cols-4 lg:max-w-full lg:grid-cols-5 lg:grid-rows-1 mx-auto mt-20">
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
                                <p className='absolute bottom-[-1rem] w-full text-center font-quicksand font-semibold text-grey select-none peer-hover:text-mygreen peer-hover:font-bold transition-all ease-in-out dark:text-darkwhite dark:peer-hover:text-lightg' ref={currentItems}>{items.name}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto mt-36'>
                <div className='relative w-fit overflow-hidden'>
                    <motion.div initial={{ opacity: 0 }} animate={oTextView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} >
                        <h2 className="font-quicksand text-mygreen font-bold text-lg dark:text-lightg">Also studied</h2>
                        <h1 className='dark:text-white text-5xl font-raleway font-extrabold text-notSoBlack' ref={oTextRef}>Other skills</h1>
                    </motion.div>

                    <motion.div className='absolute w-full h-full bg-mygreen dark:bg-lightg top-0' variants={variants} initial="initial" animate={oTextView ? "animate" : "none"} ></motion.div>
                </div>

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
                                <p className='absolute bottom-[-1rem] w-full text-center font-quicksand font-semibold text-grey select-none peer-hover:text-mygreen peer-hover:font-bold transition-all ease-in-out dark:text-darkwhite dark:peer-hover:text-lightg'>{items.name}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Skills;