import { FunctionComponent, useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import { genRandom } from '../../utils/UsefulFunctions'
import { projectList } from '../../utils/ObjectList'
import ProjectTemplate from '../Templates/ProjectTemplate'
import { useInView } from "react-intersection-observer";


const Projects: FunctionComponent = () => {

    const options = {
        triggerOnce: true,
        thresold: 0.5
    }

    const [projTitle, projView] = useInView(options)

    const [proj2, view2] = useInView(options)
    const [proj3, view3] = useInView(options)

    const refArr = [undefined, proj2, proj3]

    const [self1, selfView1] = useInView(options)
    const [self2, selfView2] = useInView(options)
    const [self3, selfView3] = useInView(options)

    const selfRefArr = [self1, self2, self3]
    const selfViewArr = [selfView1, selfView2, selfView3]

    const viewArr = [view2, view3, false]

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

        <div className='max-w-[1600px] mx-auto mt-36 h-auto flex flex-col relative'>
            <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto text-left'>

                <div className="relative overflow-hidden pb-1 w-fit" ref={projTitle}>
                    <motion.div initial={{ opacity: 0 }} animate={projView ? { opacity: 100 } : {}} transition={{ delay: 0.9 }} >
                        <h1 className="font-quicksand text-mygreen font-semibold text-lg lg:text-left dark:text-lightg">Some of my works</h1>
                        <h1 className='dark:text-white text-5xl font-raleway font-extrabold text-notSoBlack'>PROJECTS</h1>
                    </motion.div>
                    <motion.div className='absolute w-full h-full bg-mygreen dark:bg-lightg top-0' variants={variants} initial="initial" animate={projView ? "animate" : "none"} ></motion.div>
                </div>


            </div>

            <div className='overflow-hidden'>
                {projectList.map((items, index) => {
                    return (
                        <ProjectTemplate key={index} num={items.num} title={items.title} desc={items.desc} img={items.img} innerRef={refArr[index]} view={viewArr[index]} selfRef={selfRefArr[index]} selfView={selfViewArr[index]} link={items.link} />
                    )
                })}
            </div>


        </div>


    );
}

export default Projects;