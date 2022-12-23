import { motion } from 'framer-motion'
import Image from 'next/image';
import Hello from './Hello';
import { useState, useEffect } from 'react';
import { current } from '../../utils/ObjectList';

const Welcome = () => {
    
    return (
        <motion.div transition={{ height: { ease: [.21,1.03,.25,.92], delay: 0.8, duration: 2 } }} initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ height: 0, top: 0 }} className="fixed w-full bg-white z-10 h-screen bg-fixed bottom-0">
            <div className="mynav p-7 flex items-center justify-between relative">
                <div className='flex items-center w-fit cursor-pointer'>
                    <Image src="/icon.webp" alt="Logo" width="34" height="34" className='w-auto h-auto' />
                    <p className='font-quicksand font-medium ml-4 hover:text-mygreen transition-all ease-in-out'>alvarez.portfolio&#40;&#41;</p>
                </div>
            </div>


            <div className="w-full h-[76%] flex justify-center items-center">
                <div className="flex">
                    <Hello />
                </div>
            </div>
        </motion.div>
    );
}

export default Welcome;