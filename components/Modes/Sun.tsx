import { motion } from "framer-motion";
import { HiSun } from 'react-icons/hi'
import { FunctionComponent } from 'react'

interface myProp {
    toggleMode: () => void
}

const Sun: FunctionComponent<myProp>  = (props) => {
    const { toggleMode } = props
    
    return (
		<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
			<HiSun className='lg:text-4xl xl:text-5xl cursor-pointer' onClick={toggleMode} />
		</motion.div>
    );
}

export default Sun;