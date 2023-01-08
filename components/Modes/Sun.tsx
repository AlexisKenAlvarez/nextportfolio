import { motion } from "framer-motion";
import { HiSun } from 'react-icons/hi'
import { FunctionComponent } from 'react'

interface myProp {
	className: string
}

const Sun: FunctionComponent<myProp>  = (props) => {
	const { className } = props

    return (
		<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
			<HiSun className={`${className} cursor-pointer text-notSoBlack`}/>
		</motion.div>
    );
}

export default Sun;