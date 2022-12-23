import { FunctionComponent } from 'react'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hello: FunctionComponent = () => {
    const inc = [-500, -350, 0, 350, 500]
    const incy = [350, -500, 100, -500, 350]

    const jap = ['み', 'ひ', 'そ', 'さ', 'む', 'つ', 'さ', 'そ', 'ひ', 'こ', 'み', 'も', 'ね', 'る', 'め', 'け', 'れ', 'せ', 'ら', 'に', 'な', 'ん', 'か', 'か', 'い', 'て', 'た',]
    const [letters, setTest] = useState(['早', '色', 'の', 'え', 'か'])
    const word = "HELLO"

    function genRandom() {
        let randomLetter = jap[Math.floor(Math.random() * jap.length)];
        return randomLetter
    }

    useEffect(() => {
        var tempArray = ['']
        const arr = [3, 6, 9, 12, 15]

        for (let x = 0; x < 17; x++) {
            setTimeout(() => {

                arr.map((items, i) => {
                    if (x >= items) {
                        tempArray[i] = word[i]
                    } else {
                        tempArray[i] = genRandom()
                    }
                })

                setTest([...tempArray])
            }, 100 * (x + 1));
        }
    }, [])

    return (
        <>
            {letters.map((items, i,) => {
                return (
                    <motion.h1 key={i} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: i * 0.070, scale: { delay: i * 0.15, duration: 1 } }} exit={{ scale: 5, opacity: 0, x: inc[i], y: incy[i] }} className="text-[6rem] md:text-[9rem] lg:text-[14rem] xl:text-[17rem]">{items}</motion.h1>
                )
            })}
        </>

    );
}

export default Hello;