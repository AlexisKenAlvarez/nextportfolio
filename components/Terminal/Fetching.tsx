import { useEffect, } from 'react'
import { motion, useAnimation } from 'framer-motion';

const Fetching = () => {
    const animationControls = useAnimation();


    async function sequence() {
        await animationControls.start(
            {
                width: "40%",
                transition: {
                    duration: 0.01,
                    delay: 0.3
                }
            }
        );
        await animationControls.start(
            {
                width: "60%",
                transition: {
                    duration: 0.01,
                    delay: 0.2
                }
            }
        );
        await animationControls.start(
            {
                width: "90%",
                transition: {
                    duration: 0.01,
                    delay: 0.2
                }
            }
        );
        await animationControls.start(
            {
                width: "100%",
                transition: {
                    duration: 0.01,
                    delay: 0.3
                }
            }
        );
    }


    useEffect(() => {
        sequence()
    }, [])
    return (
        <div className='flex w-[20rem] items-center mt-2'>
            <p>Fetching:</p>
            <div className='ml-2 w-full border-x-[2px] border-x-white h-5 flex items-center relative'>
                -----------------------
                <motion.div animate={animationControls} className='h-full w-[20%] absolute left-0 bg-white'></motion.div>
            </div>
        </div>
    );
}

export default Fetching;