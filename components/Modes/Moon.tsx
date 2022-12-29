import { motion } from "framer-motion";
import {  HiMoon } from 'react-icons/hi'
import { FunctionComponent } from 'react'

interface myProp {
    toggleMode: () => void
}

const Moon: FunctionComponent<myProp> = (props) => {
    const { toggleMode } = props
    return (
		<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} >
			<HiMoon className='lg:text-4xl xl:text-5xl cursor-pointer text-white' onClick={toggleMode} />
		</motion.div>
    );
}

export default Moon;