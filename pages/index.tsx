import Nav from "../components/Nav";
import BoxGroup from "../components/BoxGroup";
import Image from 'next/image';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillFacebook } from 'react-icons/ai'
import Head from 'next/head';
import Hero from "../components/Hero";

const Index = () => {

	<Head>
		<title>Alvarez</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	</Head>

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

	return (
		<>
			<div className="h-[38rem] lg:h-[52rem] w-full bg-topog relative overflow-hidden">
				<Nav />
				<Hero />

				<div className="fixed bottom-0 lg:bottom-2 lg:left-2 lg:w-10 w-full lg:h-72 h-12 bg-white lg:bg-transparent opacity-1">
					<ul className="flex lg:flex-col w-full justify-center items-center relative h-full pb-0">
						{soc.map(items => {
							return (
								<li key={items.key} className="mx-3 lg:mb-4 text-2xl text-grey cursor-pointer hover:text-black transition-all ease-in-out">
									{items}
								</li>
							)
						})}
						<div className="h-full w-[2px] bg-grey lg:block hidden"></div>
					</ul>
				</div>
				<div className="w-[80%] xl:w-[70%] h-[1px] bg-grey mx-auto hidden lg:block"></div>
			</div>

			<div className="h-[100rem] w-full bg-topog relative z-[-1]">
				<div className="w-full max-w-[1600px] mx-auto">
					<div className="w-[80%] xl:w-[72%] lg:w-[80%] mx-auto">
						<h1 className="font-quicksand text-mygreen font-medium text-lg">About</h1>
						<h2 className="text-2xl font-raleway ">Everything you need to know</h2>
					</div>

				</div>
			</div>
		</>

	);
}

export default Index;