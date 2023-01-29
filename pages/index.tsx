
import Head from 'next/head';
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from '../components/Footer/Footer';
import { useEffect, useRef } from 'react'
import useWindowSize from '../hooks/useWindowSize';


const Index = () => {

	const app = useRef(null)
	const scrollContainer = useRef<HTMLDivElement>(null)
	const size = useWindowSize()

	const skewConfigs = {
		ease: .1,
		current: 0,
		previous: 0,
		rounded: 0
	}

	const skewScrolling = () => {
		skewConfigs.current = window.scrollY
		skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
		skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100

		const difference = skewConfigs.current - skewConfigs.rounded
		const acceleration = difference / size.width
		const velocity = +acceleration
		const skew = velocity * 7.5

		if (scrollContainer.current !== null) {
			scrollContainer.current!.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`
			requestAnimationFrame(() => skewScrolling())

		} else {
			console.log("IS NULL")
		}

	}

	useEffect(() => {
		requestAnimationFrame(() => skewScrolling())

		return (() => {
			document.body.style.height = 'auto'
		})
	}, [])

	useEffect(() => {
		document.body.style.height = `${scrollContainer.current!.getBoundingClientRect().height}px`
	}, [size.height])

	return (
		<>
			<Head>
				<title>Alvarez</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
			</Head>
			<div className='fixed top-0 left-0 overflow-hidden mx-auto right-0 bg-topog bg-white dark:bg-black smooth' ref={app}>
				<div className='w-full h-auto border-b-[1px] border-t-[1px] border-black' ref={scrollContainer}>
					<div className="h-[38rem] lg:h-[45rem] w-full relative overflow-hidden mt-20">
						<Hero />

						<div className="w-[80%] xl:w-[70%] h-[1px] bg-grey mx-auto hidden lg:block mt-16 dark:bg-white"></div>
					</div>
					<About />
					<Footer />
				</div>
			</div>

		</>

	);
}

export default Index;