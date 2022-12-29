import Nav from "../components/Nav";
import Head from 'next/head';
import Hero from "../components/Hero";
import About from "../components/About";
import { motion } from "framer-motion";

const Index = () => {

	return (
		<motion.div>
			<Head>
				<title>Alvarez</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
			</Head>

			<div className="h-[38rem] lg:h-[52rem] w-full relative overflow-hidden">
				<Hero />

				<div className="w-[80%] xl:w-[70%] h-[1px] bg-grey mx-auto hidden lg:block"></div>
			</div>
			<About />

		</motion.div>
	);
}

export default Index;