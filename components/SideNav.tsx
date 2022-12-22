import { FunctionComponent } from "react";
import Image from 'next/image';
import { RiCloseFill } from "react-icons/ri"
import { motion } from 'framer-motion'

interface myProp {
    close: () => void
}

const SideNav: FunctionComponent<myProp> = (props) => {
    const sideItems = ['home', 'projects', 'contact']
    const { close } = props

    const subNav = {
        initial: {
            x: "100%"
        },
        animate: {
            x: "0%",
            ease: "circIn"
        }
    }

    const mainNav = {
        initial: {
            x: "100%",
        },
        animate: {
            x: "0%",
            transition: {
                delay: 0.15,
                ease: "easeIn"
            }
            
        }
    }

    return (
        <>
            <motion.div variants={subNav} initial="initial" animate="animate" exit="initial"  className='fixed bg-lightg w-full h-screen top-0 left-0 z-20' ></motion.div>

            <motion.div variants={mainNav} initial="initial" animate="animate" exit="initial" className='bg-db w-full h-screen translate-x-[100%] fixed top-0 right-0 z-20 overflow-hidden'>
                <div className='w-full flex justify-between p-8 pl-12'>
                    <Image src="/whitelogo.webp" alt="Logo" width="50" height="50" />
                    <RiCloseFill color="white" className='text-white text-3xl' onClick={close} />
                </div>
                <ul className='text-white font-quicksand ml-12 mt-9'>
                    {sideItems.map((items) => {
                        return (
                            <li className="mb-10" key={items}>{items}&#40;&#41;</li>
                        )
                    })}
                    <li>terminal_</li>
                </ul>
            </motion.div>
        </>
    );
}

export default SideNav;