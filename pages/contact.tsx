import { NextPage } from "next";
import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';
import SendButton from '../components/Buttons/SendButton';
import { motion } from "framer-motion";

const Contact: NextPage = () => {
    const stored = localStorage.getItem("mode")

    const variants = {
        initial: {
            x: "-100%"
        },

        initialRight: {
            y: "100%"
        },

        animate: {
            x: ["-101%", "0%", "101%"],
            transition: {
                duration: 1.2,
                delay: 0.3
            }
        },

        animateRight: {
            y: ["101%", "0%", "-101%"],
            transition: {
                duration: 1.2,
                delay: 0.3
            }
        },
    }

    return (
        <>
            <div className={`w-full h-[100vh] flex items-center absolute top-0 dark:bg-footerBlack bg-[#F5F5F5]`}>
                <div className='w-full max-w-[840px] xl:max-w-[950px] bg-[#F5F5F5] dark:bg-footerBlack h-[33rem] mx-auto relative rounded-2xl flex '>

                    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.35 }} className='absolute bottom-14 w-fit h-fit bg-mygreen right-[-2.5rem] z-10 px-10 py-2 hidden lg:block dark:bg-lightg'>
                        <p className='font-raleway text-white font-bold text-xl dark:text-footerBlack'>Get in touch</p>
                    </motion.div>

                    <div className='lg:ml-14 xl:ml-20 lg:mt-5 mx-auto'>
                        <div className='w-fit mx-auto mt-16 relative overflow-hidden'>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ delay: 0.9 }}>
                                <p className='w-fit text-center mb-2 font-semibold text-mygreen dark:text-lightg'>Contact</p>
                                <h1 className='font-raleway text-notSoBlack font-[900] lg:text-4xl lg:w-[22rem] text-3xl w-[18rem] dark:text-white'>Let&apos;s talk and build together.</h1>
                            </motion.div>

                            <motion.div className='absolute w-full h-full bg-mygreen top-0 dark:bg-lightg' variants={variants} initial="initial" animate="animate" ></motion.div>
                        </div>

                        <div className='text-lightBorder lg:ml-2 font-quicksand'>
                            <div className='mt-12 lg:w-[21rem] w-[18rem]'>
                                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.2 }} className='relative'>
                                    <input name="email" className='peer w-full bg-transparent border-b-[3px] border-b-lightBorder outline-0 p-2' autoComplete='off'></input>
                                    <label htmlFor="email" className='absolute bottom-3 left-2 transition-all ease-in-out pointer-events-none peer-focus:text-mygreen peer-focus:font-bold peer-focus:translate-y-[-2.2rem] lg:peer-focus:translate-x-[18rem] peer-focus:translate-x-[14rem] dark:peer-focus:text-lightg'>Email</label>
                                    <div className='h-1 pointer-events-none absolute bg-transparent bottom-0 border-b-[3px] border-b-lightg left-0 w-0 transition-all ease-in-out peer-hover:w-full duration-[0.7s] peer-focus:w-full'></div>

                                </motion.div>

                                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.25 }} className='relative mt-10'>
                                    <TextareaAutosize className='peer w-full resize-none bg-transparent border-b-[3px] border-b-lightBorder outline-0 p-2' name="message" maxRows={2} />
                                    <label htmlFor="message" className='absolute top-1 left-2 transition-all ease-in-out pointer-events-none peer-focus:text-mygreen peer-focus:font-bold peer-focus:translate-y-[-2.4rem] lg:peer-focus:translate-x-[16rem]  peer-focus:translate-x-[13rem] dark:peer-focus:text-lightg'>Message</label>
                                    <div className='h-1 pointer-events-none absolute bg-transparent bottom-[6px] border-b-[3px] border-b-lightg left-0 w-0 transition-all ease-in-out peer-hover:w-full duration-[0.7s] peer-focus:w-full'></div>
                                </motion.div>

                                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.30 }} >
                                    <SendButton text="Send" className='bg-mygreen text-white font-bold ml-auto mt-6 dark:bg-lightg dark:text-footerBlack' />
                                </motion.div>

                            </div>
                        </div>


                    </div>


                    <div className='md:block hidden justify-center items-center w-[50%] h-full'>
                        <motion.div className="relative overflow-hidden w-fit mx-auto mt-10">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ delay: 0.9 }} >
                                <Image src={stored === 'light' ? "/contact/Me.webp" : "/contact/MeDark.webp"} alt="Me" width="300" height="300" className="mx-auto translate-y-[10%] w-[22rem]" />
                            </motion.div>

                            <motion.div className='absolute w-full h-full bg-mygreen top-0 dark:bg-lightg' variants={variants} initial="initialRight" animate="animateRight" ></motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact