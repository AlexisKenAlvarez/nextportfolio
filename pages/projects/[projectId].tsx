import { GetStaticPaths, GetStaticProps } from 'next';
import PagesTemplate from '../../components/Templates/PagesTemplate';
import { CgArrowLongRight } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'
import { lista, projectType, unix, tigershop } from '../../utils/ProjectList'
import Footer from '../../components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import useWindowSize from '../../hooks/useWindowSize';
import { useRef, useEffect } from 'react'
import Last from '../../components/Projects/Last';
import Phone from '../../components/Projects/Phone';


const ProjectId = ({ project }: { project: projectType }) => {

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



    const warn = (
        <span>Website link sometimes <b>does not work</b> because of Railway&apos;s <b>free tier monthly usage limits.</b></span>
    )


    return (
        <section className='fixed top-0 left-0 w-full h-fit overflow-hidden right-0 mx-auto' ref={app}>
            <div className="w-full h-auto border-b-[1px] border-t-[1px] border-black" ref={scrollContainer}>
                <div className="w-full min-h-[85vh] h-auto bg-white px-8 flex justify-center pt-32">
                    <div className="w-fit h-auto font-poppins md:flex mx-auto md:mt-10 gap-x-[15vw]">

                        <div className="grid gap-x-0 grid-cols-headerGrid w-full md:grid-cols-deskH md:w-fit">
                            <div className=" w-[4rem]">
                                <h2 className="font-semibold text-xl text-darkgrey 2xl:text-2xl">Year</h2>
                                <p className="text-sm text-grey mt-3 2xl:text-lg 2xl:mt-6">{project.year}</p>
                            </div>

                            <div className="w-fit place-self-start 2xl:ml-8">
                                <h2 className="font-semibold text-xl text-darkgrey 2xl:text-2xl ">What I did</h2>
                                <ul className="text-sm min-w-[11rem] text-grey 2xl:text-lg 2xl:mt-6">
                                    {project.what.map((items, i) => {
                                        return (
                                            <li key={i} className="mt-3 2xl:mt-4">{items}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </div>

                        <div className="mt-10 w-auto md:mt-0">
                            <h1 className="font-bold text-4xl text-darkgrey 2xl:text-7xl ">{project.title}</h1>
                            <p className="text-sm max-w-[26.6rem] text-grey md:leading-8 2xl:text-lg 2xl:max-w-[38rem] 2xl:mt-6 2xl:leading-9 mt-6">{project.desc}{project.title === 'LISTA' ? warn : project.title === 'UNIX' ? warn : null}</p>

                            <div className='text-grey flex items-center w-[11rem] mt-10 h-[2.5rem] select-non overflow-hidden relative mb-14'>
                                <Link href={project.website} rel="noreferrer" target="_blank" className='cursor-pointer relative w-[8rem] h-full flex items-center hover:w-full bg-white hover:z-10 z-0 transition-all ease-in-out duration-500 hover:bg-black border-t-[1px] border-l-[1px] border-b-[1px] border-grey rounded-tl-md rounded-bl-md hover:rounded-tr-md hover:rounded-br-md hover:text-lightg group'>

                                    <p className='text-sm ml-[1.3rem] group-hover:translate-x-2 transition-transform duration-500'>Visit website</p>
                                    <CgArrowLongRight className="absolute left-[5.5rem] text-2xl group-hover:translate-x-10 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 text-lightg" />
                                </Link>

                                <Link href={project.source} rel="noreferrer" target="_blank" className="border-[1px] rounded-tr-md rounded-br-md border-grey h-full flex items-center cursor-pointer absolute right-0 bg-white z-0 hover:bg-black hover:text-lightg transition-all duration-500 w-[3rem] hover:w-full hover:rounded-tl-md hover:rounded-bl-md group">
                                    <p className='text-sm transition-all group-hover:ml-7 duration-500 absolute w-[6rem] opacity-0 translate-x-[-5rem] group-hover:translate-x-0 group-hover:opacity-100 text-lightg z-0 pointer-events-none'>Source code</p>
                                    <AiFillGithub className='text-2xl ml-auto mr-[0.7rem] group-hover:translate-x-[-0.7rem] transition-transform duration-500 z-10' />
                                </Link>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full h-auto bg-projgrey relative top-0 pb-20 lg:pb-40 2xl:pb-60">
                    <div className='w-full px-8 flex justify-center md:max-w-[65vw] mx-auto'>

                        <div className='w-full h-auto mt-[-7rem]'>
                            {project.images.map((items) => {
                                return (
                                    <PagesTemplate image={`/Projects/${items}`} alt={items} key={items} />
                                )
                            })}

                        </div>

                    </div>
                </div>

                <Phone phone={project.phone}/>
                <Last last={project.last} />
                <Footer />
            </div>
        </section>
    );
}

export const getStaticPaths: GetStaticPaths = () => {


    return {
        paths: ['/projects/lista', '/projects/unix', '/projects/tigershop'],
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async (ctx) => {

    const id = ctx.params!.projectId

    return {
        props: {
            project: id === 'lista' ? lista : id === 'unix' ? unix : id === 'tigershop' ? tigershop : null
        }
    }
}

export default ProjectId;