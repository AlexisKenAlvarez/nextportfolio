import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Welcome from '../components/HeroAnimation/Welcome'
import Nav from '../components/Nav'
import Soc from '../components/Soc'
import { useRouter } from 'next/router'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const [exit, setExit] = useState(false)
	const [mode, setMode] = useState('')

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

	return (
		<div className={`${mode}`}>
			<div style={ mode === 'dark' ? {background: "black"} : {}}>
				<AnimatePresence mode="wait">
					<motion.div style={scroll ? { overflowY: "auto" } : { overflow: "hidden" }} className="overflow-x-hidden w-full h-auto bg-topog dark:bg-[#333333]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key={router.route}>
						<Nav activeColor={mode === 'dark' ? "#5AE676" : "#588F62"} />
						<Soc />
						<div className='z-10 right-[2rem] top-[7rem] hidden lg:block fixed select-none'>
							<HiSun className='lg:text-4xl xl:text-5xl cursor-pointer' onClick={toggleMode} />
						</div>
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
