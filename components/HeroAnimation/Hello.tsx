import { FunctionComponent } from 'react'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hello: FunctionComponent = () => {
    const inc = [-500, -350, 0, 350, 500]
    const incy = [350, -500, 100, -500, 350]

    const jap = ['み','ひ','そ','さ','む','つ','さ','そ','ひ','こ','み','も','ね','る','め','け','れ','せ','ら','に','な','ん','か','か','い','て','た',]
    const [letters, setTest] = useState(['早', '色', 'の', 'え', 'か'])

    useEffect(() => {
        var trylang = ['早', '色', 'の']
        for(let x = 0; x < 17 ; x++) {
            setTimeout(() => {
                let letter1 = jap[Math.floor(Math.random() * jap.length)];
                let letter2 = jap[Math.floor(Math.random() * jap.length)];
                let letter3 = jap[Math.floor(Math.random() * jap.length)];
                let letter4 = jap[Math.floor(Math.random() * jap.length)];


                if (x >= 3) {
                    trylang[0] = "H"
                }  else {
                    trylang[0] = letter1

                }
                if (x >= 6) {
                    trylang[1] = "E"
                } else {
                    trylang[1] = letter2

                }
                if (x >= 9) {
                    trylang[2] = "L"
                } else {
                    trylang[2] = letter2

                }
                if (x >= 12) {
                    trylang[3] = "L"
                }  else {
                    trylang[3] = letter3

                }
                if (x >= 15) {
                    trylang[4] = "O"
                } else {
                    trylang[4] = letter4

                }

                setTest([...trylang])  
            }, 100 * (x + 1));
        }
    }, [])

    return (
        <>
            {letters.map((items, i,) => {
                return (
                    <motion.h1 key={i} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: i * 0.070, scale: {delay: i * 0.15, duration: 1} }} exit={{ scale: 5, opacity: 0, x: inc[i], y: incy[i] }} className="text-[6rem] md:text-[9rem] lg:text-[14rem] xl:text-[17rem]">{items}</motion.h1>
                )
            })}
        </>

    );
}

export default Hello;