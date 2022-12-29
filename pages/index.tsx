
import Head from 'next/head';
import Hero from "../components/Hero";
import About from "../components/About";

const Index = () => {

	return (
		<div>
			<Head>
				<title>Alvarez</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
			</Head>

			<div className="h-[38rem] lg:h-[45rem] w-full relative overflow-hidden">
				<Hero />

				<div className="w-[80%] xl:w-[70%] h-[1px] bg-grey mx-auto hidden lg:block mt-16 dark:bg-darkwhite"></div>
			</div>
			<About />

		</div>
	);
}

export default Index;