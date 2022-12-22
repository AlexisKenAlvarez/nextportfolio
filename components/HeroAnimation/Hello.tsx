import { FunctionComponent } from 'react'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Hello: FunctionComponent = () => {
    const letters = ["H", "E", "L", "L", "O"]
    const inc = [-500, -350, 0, 350, 500]
    const incy = [350, -500, 100, -500, 350]

    return (
        <>
            {letters.map((items, i,) => {
                return (
                    <motion.h1 key={items} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: i * 0.070, scale: {delay: i * 0.15, duration: 1} }} exit={{ scale: 5, opacity: 0, x: inc[i], y: incy[i] }} className="text-[6rem] md:text-[9rem] lg:text-[14rem] xl:text-[17rem]">{items}</motion.h1>
                )
            })}
        </>

    );
}

export default Hello;