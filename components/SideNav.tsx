import { FunctionComponent } from "react";
import Image from 'next/image';
import { RiCloseFill } from "react-icons/ri"
import { AnimatePresence, motion } from 'framer-motion'
import Moon from "./Modes/Moon";
import Sun from "./Modes/Sun";
import Link from 'next/link';
import { sideItems } from "../utils/ObjectList";

interface myProp {
    close: () => void,
    onClick: () => void,
    active: string

}

const SideNav: FunctionComponent<myProp> = (props) => {

    const { close, onClick, active } = props

    const mainNav = {
        initial: {
            opacity: 0,
            PointerEvent: "none"

        },
        animate: {
            opacity: 100,
            PointerEvent: "auto",
            transition: {
                duration: 0.4,
                delay: 0.2
            }
        },
        exit: {
            opacity: 0,
            PointerEvent: "none",
            transition: {
                duration: 0.4,
                delay: 0.2
            }
        },

    }

    return (
        <>
            <motion.div variants={mainNav} initial="initial" animate="animate" exit="exit" className='dark:bg-footerBlack bg-white w-full h-screen fixed top-0 right-0 z-20 overflow-hidden'>
                <div className='w-full flex justify-between p-8 pl-12'>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: 0.5}} className="mx-auto">
                        <Image src="/whitelogo.webp" alt="Logo" width="50" height="50" className="mx-auto mt-10 invert dark:invert-0" />

                    </motion.div>
                    <RiCloseFill color="white" className='text-white text-3xl invert dark:invert-0' onClick={close} />
                    <div onClick={onClick} className="absolute left-0 right-0 mx-auto w-fit bottom-10">
                        <AnimatePresence>
                            {active === 'light' ? <Sun className="text-2xl ml-2 text-grey" /> : <Moon className="text-2xl ml-2" />}
                        </AnimatePresence>
                    </div>

                </div>
                <ul className='dark:text-white font-quicksand mt-9 text-center text-black select-none' >
                    <AnimatePresence>
                        {sideItems.map((items, i) => {
                            return (
                                <Link href={items.link}>
                                    <motion.li initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1, delay: i * 0.08 }} className="mb-10">{items.label}&#40;&#41;</motion.li>
                                </Link>

                            )
                        })}
                    </AnimatePresence>

                    <motion.li initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.24 }} >terminal_</motion.li>
                </ul>
            </motion.div>
        </>
    );
}

export default SideNav;