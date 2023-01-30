import { NextPage } from "next";
import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';
import SendButton from '../components/Buttons/SendButton';
import { motion } from "framer-motion";
import Particle from "../components/Particle";
import { useState, useEffect } from "react";
import { BsCheckAll } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'


interface messageProp {
    email: string,
    message: string
}

interface showType {
    email: boolean,
    message: boolean
}

const Contact: NextPage = () => {
    const [debounce, setDebounce] = useState(false)
    const [done, setDone] = useState(false)
    const [message, setMessage] = useState<messageProp>({
        email: '',
        message: ''
    })

    const [show, setShow] = useState<showType>({
        email: true,
        message: true
    })

    const stored = typeof window !== 'undefined' ? localStorage.getItem("mode") : null
    const variants = {
        initial: {
            x: "-100%"
        },

        initialRight: {
            y: "100%"
        },

        animate: {
            x: ["-101%", "0%", "101%"],
            transition: {
                duration: 1.2,
                delay: 0.3
            }
        },

        animateRight: {
            y: ["101%", "0%", "-101%"],
            transition: {
                duration: 1.2,
                delay: 0.3
            }
        },
    }

    const [valid, setValid] = useState(false)

    const handleDone = () => {
        setDone(true)

        setTimeout(() => {
            setDebounce(false)
            setDone(false)
        }, 4000);
    }

    const Sent = (
        <>
            <p>Message sent</p>
            <BsCheckAll className='ml-2 text-xl' />

        </>
    )

    const Send = (
        <>
            <p>Send</p>
            <RiSendPlaneFill className='ml-2' />
        </>
    )

    const handleSend = () => {
        if (!debounce) {
            setDebounce(true)
            fetch('/api/sendEmail',
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: message.email,
                        message: message.message
                    })
                }
            ).then((response) => {
                return response.json()
            }).then((r) => {
                setMessage(value => ({ ...value, email: '' }))
                setMessage(value => ({ ...value, message: '' }))

                console.log(r);
                handleDone()
            })
        }

    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(value => ({ ...value, [e.target.id]: e.target.value }))
    }

    const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(value => ({ ...value, [e.target.id]: e.target.value }))
    }

    const onFocusMessage = (str: string) => {
        setShow(val => ({ ...val, [str]: true }))
    }

    const onBlurMessage = (str: string) => {
        if (message[str as keyof messageProp] === '') {
            setShow(val => ({ ...val, [str]: true }))

        } else {
            setShow(val => ({ ...val, [str]: false }))

        }
    }

    function ValidateEmail(str: string) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)
    }

    useEffect(() => {
        if (ValidateEmail(message['email']) && message['message'].length >= 3) {
            setValid(true)
        } else {
            setValid(false)
        }

    }, [message])



    return (
        <>
            <div className={`w-full h-[100vh] flex items-center absolute top-0 dark:bg-footerBlack bg-[#F5F5F5]`}>
                <Particle />
                <div className='w-full max-w-[840px] xl:max-w-[950px] h-[33rem] mx-auto relative rounded-2xl flex '>
{/* 
                    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.35 }} className='absolute bottom-14 w-fit h-fit bg-mygreen right-[0.5rem] z-0 px-10 py-2 hidden lg:block dark:bg-lightg'>
                        <p className='font-raleway text-white font-bold text-xl dark:text-footerBlack'>Get in touch</p>
                    </motion.div> */}

                    <div className='lg:ml-14 xl:ml-20 lg:mt-5 mx-auto'>
                        <div className='w-fit mx-auto mt-16 relative overflow-hidden'>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ delay: 0.9 }}>
                                <p className='w-fit text-center mb-2 font-semibold text-mygreen dark:text-lightg'>Contact</p>
                                <h1 className='font-raleway text-notSoBlack font-[900] lg:text-4xl lg:w-[22rem] text-3xl w-[18rem] dark:text-white'>Let&apos;s talk and build together.</h1>
                            </motion.div>

                            <motion.div className='absolute w-full h-full bg-mygreen top-0 dark:bg-lightg' variants={variants} initial="initial" animate="animate" ></motion.div>
                        </div>

                        <div className='text-lightBorder lg:ml-2 font-quicksand'>
                            <div className='mt-12 lg:w-[21rem] w-[18rem]'>
                                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.2 }} className='relative'>
                                    <input name="email" id="email" className='peer w-full bg-transparent border-b-[3px] border-b-lightBorder outline-0 p-2 dark:text-white' autoComplete='off' onChange={handleChangeEmail} value={message['email' as keyof messageProp]} onFocus={() => { onFocusMessage("email") }} onBlur={() => { onBlurMessage('email') }}></input>
                                    <label htmlFor="email" className='absolute bottom-3 left-2 transition-all ease-in-out pointer-events-none peer-focus:text-mygreen peer-focus:font-bold peer-focus:translate-y-[-2.2rem] lg:peer-focus:translate-x-[18rem] peer-focus:translate-x-[14rem] dark:peer-focus:text-lightg' style={show['email'] ? { opacity: "100%" } : { opacity: "0%" }}>Email</label>
                                    <div className='h-1 pointer-events-none absolute bg-transparent bottom-0 border-b-[3px] border-b-lightg left-0 w-0 transition-all ease-in-out peer-hover:w-full duration-[0.7s] peer-focus:w-full'></div>

                                </motion.div>

                                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.25 }} className='relative mt-10'>
                                    <TextareaAutosize className='dark:text-white peer w-full resize-none bg-transparent border-b-[3px] border-b-lightBorder outline-0 p-2' name="message" maxRows={2} id="message" onChange={handleChangeMessage} value={message['message' as keyof messageProp]} onFocus={() => { onFocusMessage('message') }} onBlur={() => { onBlurMessage('message') }} />
                                    <label htmlFor="message" className='absolute top-1 left-2 transition-all ease-in-out pointer-events-none peer-focus:text-mygreen peer-focus:font-bold peer-focus:translate-y-[-2.4rem] lg:peer-focus:translate-x-[16rem]  peer-focus:translate-x-[13rem] dark:peer-focus:text-lightg' style={show['message'] ? { opacity: 100 } : { opacity: 0 }}>Message</label>

                                    <div className='h-1 pointer-events-none absolute bg-transparent bottom-[6px] border-b-[3px] border-b-lightg left-0 w-0 transition-all ease-in-out peer-hover:w-full duration-[0.7s] peer-focus:w-full'></div>
                                </motion.div>

                                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.30 }} >
                                    <SendButton text={debounce ? done ? Sent : "Sending" : Send} className={`bg-mygreen text-white font-bold ml-auto mt-6 dark:bg-lightg dark:text-footerBlack w-[7rem] overflow-hidden ${debounce ? 'pointer-events-none' : ''} ${valid ? 'pointer-events-auto' : 'pointer-events-none opacity-70'}`} debounce={debounce} done={done} onClick={handleSend} />
                                </motion.div>

                            </div>
                        </div>


                    </div>


                    <div className='md:block hidden justify-center items-center w-[50%] h-full'>
                        <motion.div className="relative overflow-hidden w-fit mx-auto mt-10">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ delay: 0.9 }} >
                                <Image src='/contact/bondee.webp' alt="Me" width="300" height="300" className="mx-auto w-[15rem]" />
                            </motion.div>

                            <motion.div className='absolute w-full h-full bg-mygreen top-0 dark:bg-lightg' variants={variants} initial="initialRight" animate="animateRight"></motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact