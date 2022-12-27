import { FunctionComponent, MutableRefObject } from 'react'
import Image from 'next/image';
import Primary from '../Buttons/Primary';
import { useEffect } from 'react';
import { delay, motion } from 'framer-motion';

interface myProp {
    num: string,
    title: string,
    desc: string,
    img: string,
    innerRef?: MutableRefObject<null> | null,
    view: boolean
    selfRef: MutableRefObject<null> | null,
    selfView: boolean
}

const ProjectTemplate: FunctionComponent<myProp> = (props) => {

    const { num, title, desc, img, innerRef, view, selfRef, selfView } = props

    const variant = {
        initial: {
            opacity: 0,
            x: -100,
            y: 100
        },

        initialImage: {
            opacity: 0,
            x: 100,
            y: 100
        },

        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1.5,
                ease: [.21, 1.03, .27, 1],
                delay: 0.1
            }
        },

        none: {}
    
    }

    return (
        <div className={`font-raleway px-7 h-[45rem] md:h-[30rem] lg:h-[40rem]`} style={title === "Lista" ? { marginTop: "10rem" } : {}}>
            <div className='mx-auto w-fit flex flex-col md:flex-row md:px-7 h-full'>
                <div className='md:flex hidden w-5 h-full mr-8 justify-start items-center flex-col relative'>
                    <motion.div initial={{opacity: 0}} animate={ selfView ? {opacity: 1} : {}} transition={{duration: 1, ease: [.21, 1.03, .27, 1]}} className='absolute top-0 circle w-3 h-3 bg-black rounded-full'></motion.div>
                    <motion.div initial={{ height: 0 }} animate={view ? { height: "100%" } : {}} transition={{ ease: [.21, 1.03, .27, 1], delay: 0.1, duration: 1 }} className='w-[2px] h-0 bg-black mx-auto'></motion.div>
                </div>

                <motion.div variants={variant} initial="initial" animate={selfView ? "animate" : "none"}>
                    <p className='font-kanit text-mygreen font-semibold text-xl mb-8 mt-[-5px] p-0'>{num}</p>
                    <h1 className='text-4xl font-bold text-darkgrey'>{title}</h1>
                    <h2 className='text-darkgrey w-[22rem] font-medium'>{desc}</h2>
                    <div ref={innerRef}>
                        <Primary className="mt-6" text="View project" />
                        <div ref={selfRef}></div>
                    </div>
                </motion.div>

                <motion.div  variants={variant} initial="initialImage" animate={selfView ? "animate" : "none"} className='relative lg:w-[30rem] lg:h-[20rem] lg:ml-[10rem] w-[20rem] h-[14rem] mt-14 lg:mt-0'>
                    <Image src={`/Projects/${img}`} alt={title} fill />
                </motion.div></div>
        </div>
    );
}

export default ProjectTemplate;