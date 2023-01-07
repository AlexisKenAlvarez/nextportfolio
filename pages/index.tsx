
import Head from 'next/head';
import Hero from "../components/Hero";
import About from "../components/About";
import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';
import SendButton from '../components/Buttons/SendButton';

const Index = () => {

	return (
		<div>
			<Head>
				<title>Alvarez</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
			</Head>

			<div className="h-[38rem] lg:h-[45rem] w-full relative overflow-hidden">
				<Hero />

				<div className="w-[80%] xl:w-[70%] h-[1px] bg-grey mx-auto hidden lg:block mt-16 dark:bg-white"></div>
			</div>
			<About />

			<div className='w-full h-[35rem] mt-[-5rem]'>
				<div className='w-full max-w-[840px] xl:max-w-[950px] bg-[#F5F5F5] h-[33rem] mx-auto relative rounded-2xl flex'>

					<div className='absolute top-10 w-fit h-fit bg-mygreen left-[-2.5rem] px-10 py-2 hidden lg:block'>
						<p className='font-raleway text-white font-bold text-xl'>Contact</p>
					</div>

					<div className='absolute bottom-14 w-fit h-fit bg-mygreen right-[-2.5rem] z-10 px-10 py-2 hidden lg:block'>
						<p className='font-raleway text-white font-bold text-xl'>Get in touch</p>
					</div>

					<div className='overflow-hidden lg:ml-14 xl:ml-20 lg:mt-5 mx-auto'>
						<div className='lg:mt-[7rem] w-fit mx-auto mt-16'>
							<p className='lg:hidden block w-fit text-center mb-2 font-semibold text-mygreen'>Contact</p>
							<h1 className='font-raleway text-notSoBlack font-[900] lg:text-4xl lg:w-[25rem] text-3xl w-[18rem]'>Let's talk and build together.</h1>
						</div>

						<div className='text-lightBorder lg:ml-2 font-quicksand'>
							<div className='mt-12 lg:w-[21rem] w-[18rem]'>
								<div className='relative'>
									<input name="email" className='peer w-full bg-transparent border-b-2 border-b-lightBorder outline-0 p-2' autoComplete='off'></input>
									<label htmlFor="email" className='absolute bottom-3 left-2 transition-all ease-in-out pointer-events-none peer-focus:text-notSoBlack peer-focus:font-bold peer-focus:translate-y-[-2.2rem] lg:peer-focus:translate-x-[18rem] peer-focus:translate-x-[14rem]'>Email</label>

								</div>

								<div className='relative mt-10'>
									<TextareaAutosize className='peer w-full resize-none bg-transparent border-b-2 border-b-lightBorder outline-0 p-2' name="message" maxRows={2} />
									<label htmlFor="message" className='absolute top-1 left-2 transition-all ease-in-out pointer-events-none peer-focus:text-notSoBlack peer-focus:font-bold peer-focus:translate-y-[-2.4rem] lg:peer-focus:translate-x-[16rem]  peer-focus:translate-x-[13rem]'>Message</label>

								</div>

								<SendButton text="Send" className='bg-mygreen text-white font-bold ml-auto mt-6'/>
							</div>
						</div>


					</div>


					<div className='md:block hidden justify-center items-center w-[50%] h-full'>
						<Image src="/contact/Me.webp" alt="Me" width="300" height="300" className="mx-auto translate-y-[10%] w-[22rem]"/>
					</div>
				</div>
			</div>


			<footer className='w-full h-[10rem]'>

			</footer>
		</div>
	);
}

export default Index;