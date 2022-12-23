import Nav from "../components/Nav";
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillFacebook } from 'react-icons/ai'
import Head from 'next/head';
import Hero from "../components/Hero";
import About from "../components/About";
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Welcome from "../components/HeroAnimation/Welcome";

const Index = () => {



	const soc = [
		<a href="https://github.com/AlexisKenAlvarez" target="_blank" rel="noopener noreferrer" key="1">
			<AiOutlineGithub />
		</a>,
		<a href="https://www.instagram.com/alexiskenalvarez/" target="_blank" rel="noopener noreferrer" key="2">
			<AiFillInstagram />
		</a>,
		<a href="https://www.linkedin.com/in/alexiskenalvarez/" target="_blank" rel="noopener noreferrer" key="3">
			<AiFillLinkedin />
		</a>,
		<a href="mailto:alexisken1432@gmail.com" target="_blank" rel="noopener noreferrer" key="4">
			<AiFillMail />
		</a>,
		<a href="https://www.facebook.com/alvarez.aki/" target="_blank" rel="noopener noreferrer" key="5">
			<AiFillFacebook />
		</a>,
	]


	const [exit, setExit] = useState(false)
	const [scroll, setScroll] = useState(false)


	useEffect(() => {
		exitFunc(activeScroll)
	}, [])

	const exitFunc = (cb: () => void) => {
		setTimeout(() => {
			setExit(true)
			cb()
		}, 2000);
	}

	const activeScroll = () => {
		setTimeout(() => {
			setScroll(true)
		}, 1000);
	}




	return (
		<>
			<Head>
				<title>Alexis Ken Alvarez</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
			</Head>
			style={scroll ? { overflow: "auto" } : { overflow: "hidden" }}
			<div className="w-full h-screen">
				<div className="h-[38rem] lg:h-[52rem] w-full bg-topog relative overflow-hidden">
					<Nav />
					<Hero />

					<div className="fixed bottom-0 lg:bottom-2 lg:left-2 lg:w-10 w-full lg:h-72 h-12 bg-white lg:bg-transparent opacity-1 z-10">
						<ul className="flex lg:flex-col w-full justify-center items-center relative h-full pb-0">
							{soc.map((items, index) => {
								return (
									<li key={index} className="mx-3 lg:mb-4 text-2xl text-grey cursor-pointer hover:text-black transition-all ease-in-out">
										{items}
									</li>
								)
							})}
							<div className="h-full w-[2px] bg-grey lg:block hidden"></div>
						</ul>
					</div>
					<div className="w-[80%] xl:w-[70%] h-[1px] bg-grey mx-auto hidden lg:block"></div>
				</div>
				<About />

				<AnimatePresence>
					{exit ? null : <Welcome />}
				</AnimatePresence>

			</div>


		</>
	);
}

export default Index;