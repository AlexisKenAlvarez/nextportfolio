import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Welcome from '../components/HeroAnimation/Welcome'
import Nav from '../components/Nav'
import Soc from '../components/Soc'

export default function App({ Component, pageProps }: AppProps) {
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
		<div style={scroll ? { overflow: "auto" } : { overflow: "hidden" }} className="w-full h-auto bg-topog">
			<AnimatePresence>
				{exit ? null : <Welcome />}
			</AnimatePresence>
			<Nav/>
			<Soc/>
			<Component {...pageProps} />
		</div>

	)

}
