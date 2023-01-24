import { motion } from 'framer-motion'
import Image from 'next/image';
import Hello from './Hello';

const Welcome = () => {
    
    return (
        <motion.div transition={{ height: { ease: [.21,1.03,.25,.92], delay: 0.8, duration: 2 } }} initial={false} animate={{ opacity: 1 }} exit={{ height: 0, top: 0 }} className="fixed w-full bg-white z-30 h-screen bg-fixed bottom-0 dark:bg-[#333333]">

            <div className="w-full h-[90%] flex justify-center items-center">
                <div className="flex dark:text-white">
                    <Hello />
                </div>
            </div>
        </motion.div>
    );
}

export default Welcome;