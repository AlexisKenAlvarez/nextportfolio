import Nav from "../components/Nav";
import BoxGroup from "../components/BoxGroup";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillFacebook } from 'react-icons/ai'

const Index = () => {

	const soc = [
		<a href="https://github.com/AlexisKenAlvarez" target="_blank">
			<AiOutlineGithub />
		</a>,
		<a href="https://www.instagram.com/alexiskenalvarez/" target="_blank">
			<AiFillInstagram />
		</a>,
		<a href="https://www.linkedin.com/in/alexiskenalvarez/" target="_blank">
			<AiFillLinkedin />
		</a>,
		<a href="mailto:alexisken1432@gmail.com" target="_blank">
			<AiFillMail />
		</a>,
		<a href="https://www.facebook.com/alvarez.aki/" target="_blank">
			<AiFillFacebook />
		</a>,
		
	]

	return (
		<>
			<div className="h-screen w-full bg-topog relative overflow-x-hidden">
				<Nav />
				<div className="flex h-[80%] w-full max-w-[1600px] mx-auto min-h-[550px] justify-center">
					<div className="w-full xl:w-[35%] lg:w-[50%]  h-[85%] font-raleway px-7 mt-5 text-center lg:text-left flex lg:items-center">
						<div className="h-fit w-full lg:w-fit">
							<p className="text-mygreen font-medium text-md">Hey 👋, my name is</p>
							<h1 className="font-black text-3xl md:text-5xl mt-3">Alexis Ken Alvarez</h1>
							<h2 className="font-black text-2xl md:text-4xl mt-1 opacity-70">Full stack developer</h2>
							<h3 className="font-medium text-grey max-w-[400px] text-[16px] mx-auto lg:mx-0 mt-4">I’m a junior web developer from Philippines. I have a passion on building websites and designing UI/UX. I’m currently focusing on NextJS and also website responsiveness. I explore new lessons everyday to improve my skills.</h3>
							<div className="flex items-center mt-14 mx-auto lg:mx-0 w-fit select-none">
								<div className="w-fit px-6 bg-black opacity-70 text-white font-courier py-3 rounded font-medium cursor-pointer hover:text-lightg hover:opacity-100 transition-all ease-in-out">
									&#60;/&#62; Projects
								</div>
								<div className="flex justify-center items-center font-courier text-grey font-medium ml-5 cursor-pointer hover:text-mygreen">
									<p className="font-bold">Hire me</p>
									<HiOutlineArrowNarrowRight className="ml-2 text-2xl" />
								</div>

							</div>
						</div>

					</div>

					<div className="justify-center items-center w-[40%] hidden lg:flex">
						<BoxGroup />

					</div>

				</div>

				<div className="fixed bottom-0 lg:bottom-2 lg:left-2 lg:w-10 w-full lg:h-72 h-10">
					<ul className="flex lg:flex-col w-full justify-center items-center relative h-full pb-2">
						{soc.map((items, index) => {
							return (
								<li className="mx-3 mb-4 lg:mb-4 text-2xl text-grey cursor-pointer hover:text-black transition-all ease-in-out" key={index}>
									{items}
								</li>
							)
						})}
						<div className="h-full w-[2px] bg-grey lg:block hidden"></div>
					</ul>
				</div>
			</div>
		</>

	);
}

export default Index;