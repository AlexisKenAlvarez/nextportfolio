import { motion } from "framer-motion";
import {  HiMoon } from 'react-icons/hi'
import { FunctionComponent } from 'react'

const Moon: FunctionComponent = () => {

    return (
		<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} >
			<HiMoon className='lg:text-3xl xl:text-4xl cursor-pointer text-white' />
		</motion.div>
    );
}

export default Moon;