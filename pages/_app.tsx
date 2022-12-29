import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Welcome from '../components/HeroAnimation/Welcome'
import Nav from '../components/Nav'
import Soc from '../components/Soc'
import { useRouter } from 'next/router'
import { HiSun } from 'react-icons/hi'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const [exit, setExit] = useState(false)
	useEffect(() => {
		exitFunc()
	}, [])


	const exitFunc = () => {
		setTimeout(() => {
			setExit(true)
		}, 2000);
	}

	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		activeScroll()
		const stored = localStorage.getItem("mode")

		if (!stored) {
			localStorage.setItem("mode", "light")
		}

	}, [])


	const activeScroll = () => {
		setTimeout(() => {
			setScroll(true)
		}, 2000);
	}

	return (
		<div>
			<AnimatePresence mode="wait">
				<motion.div style={scroll ? { overflowY: "auto" } : { overflow: "hidden" }} className="overflow-x-hidden w-full h-auto bg-topog bg-[#333333]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key={router.route}>
					<Nav />
					<Soc />
					<AnimatePresence>
						{exit ? null : <Welcome />}
					</AnimatePresence>

					<motion.div>
						<Component {...pageProps} />
					</motion.div>

				</motion.div >
			</AnimatePresence >
		</div>
	)

}
