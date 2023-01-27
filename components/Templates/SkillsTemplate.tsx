import { FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface myProp {
    image: JSX.Element,
    name: string
}

const SkillsTemplate: FunctionComponent<myProp> = (props) => {
    const { image, name } = props

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
    return (
        <motion.div initial={{ y: 50, opacity: 0 }} animate={inView ? { y: 0, opacity: 100 } : {}} transition={{ delay: 0.2, duration: 0.7, ease: [.21, 1.03, .27, 1] }} className='h-[10rem] w-[7rem] xl:w-[9.5rem] relative' ref={ref}>
            <div className=' group w-full h-[60%] flex justify-center items-center select-none peer cursor-pointer'>
                <div className='w-fit h-fit relative group-hover:mt-[-1.5rem] z-8 z-10 transition-all ease-in-out select-none'>
                    {image}
                </div>
            </div>
            <div className='w-full'>
                <div className='mx-auto w-full border-t-2 border-black mt-0 shadow-forBox dark:border-darkwhite'></div>
                <div className='mx-auto w-[50%] border-t-2 border-mygreen mt-2 shadow-forBox dark:border-lightg'></div>
                <div className='mx-auto w-[20%] border-t-2 border-mygreen mt-2 shadow-forBox dark:border-lightg'></div>
            </div>
            <p className='absolute bottom-[-1rem] w-full text-center font-quicksand font-semibold text-grey select-none peer-hover:text-mygreen peer-hover:font-bold transition-all ease-in-out dark:text-darkwhite dark:peer-hover:text-lightg'>{name}</p>
        </motion.div>
    );
}

export default SkillsTemplate;