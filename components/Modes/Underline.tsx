import { motion } from "framer-motion";

const Underline = () => {
    return (
        <motion.div initial={{width: "0", left: "0", right: "auto"}} animate={{width: "95%"}} exit={{width:"0",  right: "15.2rem", left: "auto"}} transition={{duration: 0.3 }}  className='bg-mygreen dark:bg-lightg h-[0.25rem] absolute bottom-0 left-0 mx-auto origin-center ml-3 z-[-2] md:block hidden '>
        </motion.div>
    );
}

export default Underline;