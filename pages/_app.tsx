import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Welcome from '../components/HeroAnimation/Welcome'
import Nav from '../components/Nav/Nav'
import Soc from '../components/Nav/Soc'
import { useRouter } from 'next/router'
import Sun from '../components/Modes/Sun'
import Moon from '../components/Modes/Moon'
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const [exit, setExit] = useState(false)
	const [mode, setMode] = useState('')
	const validPage = ['/projects', '/', '/contact']
	const { pathname } = useRouter();

	useEffect(() => {
		// some browsers (like safari) may require a timeout to delay calling this
		// function after a page has loaded; otherwise, it may not update the position
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {

		exitFunc()
	}, [])


	const exitFunc = () => {
		setTimeout(() => {
			setExit(true)
		}, 2000);
	}

	useEffect(() => {

		const stored = localStorage.getItem("mode")

		if (!stored) {
			localStorage.setItem("mode", "light")
			setMode('light')
		} else {
			setMode(stored)
		}
	}, [])

	const toggleMode = () => {
		const stored = localStorage.getItem("mode")

		if (stored === 'light') {
			localStorage.setItem("mode", "dark")
			setMode('dark')
		} else {
			localStorage.setItem("mode", "light")
			setMode('light')

		}
	}

	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		activeScroll()
	}, [scroll])

	const activeScroll = () => {
		setTimeout(() => {
			setScroll(true)
		}, 3000);
	}


	const navSoc = (
		<>
			<Nav activeColor={mode === 'dark' ? "#5AE676" : "#588F62"} onClick={toggleMode} active={mode} />
			<Soc />
			<div className='z-10 right-[2rem] top-[7rem] hidden lg:block fixed select-none hover:bg-darkwhite p-4 transition-all ease-in-out duration-[0.5s] clip-path-forMode dark:hover:bg-black cursor-pointer' onClick={toggleMode}>
				<AnimatePresence>
					{mode === 'light' ? <Sun className="lg:text-3xl xl:text-4xl" /> : <Moon className="lg:text-3xl xl:text-4xl" />}
				</AnimatePresence>

			</div>
		</>
	)

	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet"></link>
			</Head>
			<div className={`${mode} ${scroll ? 'overflow-auto h-auto' : 'overflow-hidden h-screen'}`}>
				<div className="smooth" style={mode === 'dark' ? { background: "black" } : {}}>
					<AnimatePresence mode="wait">
						<motion.div className="overflow-x-hidden w-full h-full dark:bg-black min-h-[100vh] smooth" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key={router.route}>

							{validPage.includes(router.route) ? navSoc : router.route.includes(validPage[0]) ? navSoc : null}

							<AnimatePresence>
								{exit ? null : <Welcome />}
							</AnimatePresence>

							<motion.div>
								<Component {...pageProps} />
							</motion.div>

						</motion.div >
					</AnimatePresence >
				</div>

			</div>
		</>

	)

}
