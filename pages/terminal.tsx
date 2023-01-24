import { FcCommandLine } from 'react-icons/Fc'
import { IoCloseOutline } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Error from '../components/Terminal/Error';


const Terminal = () => {
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)
    const [focused, setFocused] = useState(false)
    const [highlight, setHighlight] = useState(false)

    const [components, setComponents] = useState<JSX.Element[]>([])
    const commands = ['/help']

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        ref.current!.focus()
    }, [])


    const handleEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (commands.includes(value)) {
                if (value === '/help') {
                    console.log("THIS IS HELP, A VALID COMMAND")
                }
            } else {
                setComponents(current => [...current, <Error value={value} />])
                setValue('')
            }
        } else if (e.ctrlKey && e.key === 'a') {
            setHighlight(true)
        } else {
            setHighlight(false)
        }
    }

    var selection = typeof window !== 'undefined' ? window.getSelection() : null
    
    const handleFocus = () => {
        setHighlight(false)
        ref.current!.focus()
    }

    useEffect(() => {
        console.log(window.getSelection()!.anchorNode);
    }, [selection])

    

    return (
        <div className="w-full h-screen bg-black overflow-hidden" onClick={handleFocus}>
            <div className='absolute bg-transparent w-full h-full top-0 left-0 z-0'></div>

            <div className="w-full h-10 bg-white flex items-center text-black fixed z-10">
                <div className='flex items-center ml-3'>
                    <FcCommandLine className='text-2xl' />
                    <p className="ml-2" ref={ref}>Command Prompt</p>

                </div>

                <div className='w-fit h-full hover:bg-[#e81123] ml-auto transition-all ease-in-out duration-300 flex items-center justify-center px-4 hover:text-white cursor-pointer'>
                    <IoCloseOutline className=' text-2xl' />
                </div>

            </div>

            <div className='mt-[2.5rem] main-container text-white font-roboto relative z-10'>

                <div className='z-20 selection:bg-white selection:text-black'>
                    <p>Alvarez Terminal &#91;Version 1.0.0&#93; <br />&#40;c&#41; Eyed Owl Corporation. All rights reserved.</p>

                    <p className='mt-5'>Visit the website <Link href="https:&#47;&#47;alexisalvarez.info&#47;" className='hover:underline'>https://alexisalvarez.info/</Link></p>
                    <p>Enter '&#47;help' to view the list of commands.</p>
                </div>

                {components && components.map((items, i) => {
                    return (
                        <div key={i}>
                            {items}
                        </div>
                    )
                })}

                <div className='flex w-full mt-5'>
                    <input type="text" name="input" className='bg-transparent outline-none caret-transparent resize-none w-full overflow-hidden absolute top-[-5rem] left-0 opacity-0 select-none z-0 peer' value={value} onChange={handleChange} autoFocus onBlur={() => { setFocused(false) }} onFocus={() => { setFocused(true) }} ref={ref} autoComplete="off" onKeyDown={handleEnter}></input>

                    <p className='break-words w-auto overflow-hidden selection:bg-white selection:text-black peer-selection:text-red-100'>Z:\Users\&#62;<span className={`${highlight ? 'bg-white text-black selection:bg-transparent' : ''}`}>{value}</span><motion.span initial={{ opacity: 0 }} animate={{ opacity: [0, 100] }} transition={{
                        repeat: Infinity,
                        repeatDelay: 0.4,
                        repeatType: "mirror",
                        ease: [0, 1.13, 0, 1]
                    }} className='font-black' style={focused ? { display: "0%" } : { opacity: "100%" }}>_</motion.span></p>
                </div>





            </div>
        </div>
    );
}

export default Terminal;