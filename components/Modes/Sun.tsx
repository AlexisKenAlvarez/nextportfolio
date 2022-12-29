import { motion } from "framer-motion";
import { HiSun } from 'react-icons/hi'
import { FunctionComponent } from 'react'


const Sun: FunctionComponent  = () => {

    return (
		<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
			<HiSun className='lg:text-3xl xl:text-4xl cursor-pointer'/>
		</motion.div>
    );
}

export default Sun;