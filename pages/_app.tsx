import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Welcome from '../components/HeroAnimation/Welcome'
import Nav from '../components/Nav'
import Soc from '../components/Soc'
import { useRouter } from 'next/router'
import Sun from '../components/Modes/Sun'
import Moon from '../components/Modes/Moon'


export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const [exit, setExit] = useState(false)
	const [mode, setMode] = useState('')
	const validPage = ['/projects', '/']

	useEffect(() => {
		exitFunc()
	}, [])


	const exitFunc = () => {
		setTimeout(() => {
			setExit(true)
		}, 2000);
	}

	useEffect(() => {
		activeScroll()

	}, [])


	const [scroll, setScroll] = useState(false)



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


	const activeScroll = () => {
		setTimeout(() => {
			setScroll(true)
		}, 2000);
	}

	const navSoc = (
		<>
			<Nav activeColor={mode === 'dark' ? "#5AE676" : "#588F62"} />
			<Soc active={mode} onClick={toggleMode}/>
			<div className='z-10 right-[2rem] top-[7rem] hidden lg:block fixed select-none hover:bg-darkwhite p-4 transition-all ease-in-out duration-[0.5s] clip-path-forMode dark:hover:bg-black cursor-pointer' onClick={toggleMode}>
				<AnimatePresence>
					{mode === 'light' ? <Sun className="lg:text-3xl xl:text-4xl"/> : <Moon className="lg:text-3xl xl:text-4xl" />}
				</AnimatePresence>

			</div>
		</>
	)

	return (
		<div className={`${mode}`}>
			<div style={mode === 'dark' ? { background: "black" } : {}}>
				<AnimatePresence mode="wait">
					<motion.div style={scroll ? { overflowY: "auto" } : { overflow: "hidden" }} className="overflow-x-hidden w-full h-auto bg-topog dark:bg-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key={router.route}>

						{validPage.includes(router.route) ? navSoc : null}

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
	)

}
