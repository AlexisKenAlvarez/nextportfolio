import { FunctionComponent } from 'react'
import { motion } from 'framer-motion';  

interface BoxProps {
    children: React.ReactNode;
};

const Box: FunctionComponent<BoxProps> = (props) => {
    return (
        <motion.div initial={{scale: 0.3}} animate={{scale: 1}} transition={{duration: 1.5, ease: [.21, 1.03, .27, 1]}} className="border-2 border-black w-36 h-40 shadow-forBox flex justify-center items-center select-none">
            {props.children}
        </motion.div>
    );
}

export default Box;