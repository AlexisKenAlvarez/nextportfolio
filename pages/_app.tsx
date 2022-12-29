import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Welcome from '../components/HeroAnimation/Welcome'
import Nav from '../components/Nav'
import Soc from '../components/Soc'
import { useRouter } from 'next/router'

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
	}, [])


	const activeScroll = () => {
		setTimeout(() => {
			setScroll(true)
		}, 2000);
	}

	return (
		<AnimatePresence mode="wait">
			<motion.div style={scroll ? { overflow: "auto" } : { overflow: "hidden" }} className="w-full h-auto bg-topog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key={router.route}>
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

	)

}
