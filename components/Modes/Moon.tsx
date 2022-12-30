import { motion } from "framer-motion";
import {  HiMoon } from 'react-icons/hi'
import { FunctionComponent } from 'react'

interface myProp {
	className: string
}

const Moon: FunctionComponent<myProp> = (props) => {
	const { className } = props
    return (
		<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} >
			<HiMoon className={`${className} cursor-pointer text-white`} />
		</motion.div>
    );
}

export default Moon;