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

	const info1 = [
		{
			id: '1',
			label: 'Fullname',
			value: 'Alexis Ken Alvarez'
		},
		{
			id: '2',
			label: 'Address',
			value: 'Alfonso Cavite'
		},
		{
			id: '3',
			label: 'Nationality',
			value: 'Filipino'
		},
		{
			id: '4',
			label: 'Country',
			value: 'Philippines'
		},
		{
			id: '5',
			label: 'Language',
			value: 'Tagalog, English'
		},
	]

	const info2 = [
		{
			id: '1',
			label: 'Primary and Secondary',
			value: 'Saint Joseph Parochial School of Cavite'
		},
		{
			id: '2',
			label: 'Tertiary',
			value: 'Cavite State University'
		},
		{
			id: '3',
			label: 'Course',
			value: 'BS Computer Science'
		},
		{
			id: '4',
			label: 'Hobbies',
			value: 'Coding, Gaming, Cycling'
		},
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
						<h1 className="font-quicksand text-mygreen font-semibold text-lg">About</h1>
						<div className="flex justify-between">
							<h2 className="text-2xl font-raleway font-semibold">Everything you need to know</h2>
							<h2 className="text-2xl font-raleway font-semibold hidden lg:block">Years of experience</h2>
						</div>
						<div className="sm:flex sm:gap-3">
							<div className="border-[1px] border-black shadow-forBox h-fit flex flex-col gap-y-10 p-5 py-10 mt-5 w-full max-w-[360px] sm:max-w-[1600px] xl:flex-row lg:pl-14 xl:gap-x-16">

								<div className="font-raleway font-medium">
									{info1.map(details => {
										return (
											<div key={details.id} className="flex mb-3 xl:mb-[35px]">
												<p className="w-[5.8rem]">{details.label}: </p>
												<p className="ml-3 text-mygreen">{details.value}</p>
											</div>
										)
									})
									}

								</div>

								<div className="font-raleway font-medium">
									{info2.map(details => {
										return (
											<div key={details.id} className="flex mb-3 xl:mb-[35px]">
												<p className="w-[7rem]">{details.label}: </p>
												<p className="ml-3 text-mygreen w-[12rem]">{details.value}</p>
											</div>
										)
									})
									}
								</div>

							</div>
							<div className="flex flex-col sm:flex-col-reverse lg:flex-col">
								<h2 className="text-2xl font-raleway font-semibold lg:hidden mt-10 sm:text-right w-[11rem]">Years of experience</h2>
								<div className="flex gap-x-2 font-raleway text-center mt-5 sm:flex-col sm:gap-y-3">
									<div className="border-[1px] border-black shadow-forBox h-fit py-10 w-[11rem]">
										<h1 className="text-5xl mb-7 font-semibold text-mygreen">3+</h1>
										<p>HTML, CSS, JS</p>
									</div>
									<div className="border-[1px] border-black shadow-forBox h-fit py-10 w-[11rem]">
										<h1 className="text-5xl mb-7 font-semibold text-mygreen">1+</h1>
										<p>React/NextJS</p>
									</div>
								</div>
							</div>

						</div>


					</div>

				</div>
			</div>
		</>
	);
}

export default Index;