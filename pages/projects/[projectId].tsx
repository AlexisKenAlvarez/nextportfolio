import { GetStaticPaths, GetStaticProps } from 'next';
import PagesTemplate from '../../components/Templates/PagesTemplate';
import { lista, projectType, unix, tigershop } from '../../utils/ProjectList'
import Footer from '../../components/Footer/Footer';
import useWindowSize from '../../hooks/useWindowSize';
import { useRef, useEffect, useState } from 'react'
import Last from '../../components/Projects/Last';
import Phone from '../../components/Projects/Phone';
import WebsiteButton from '../../components/Buttons/WebsiteButton';
import Head from 'next/head';


const ProjectId = ({ project }: { project: projectType }) => {

    const app = useRef(null)
    const scrollContainer = useRef<HTMLDivElement>(null)
    const size = useWindowSize()
    const [loading, setLoading] = useState(true)


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
            scrollContainer.current!.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`
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
        setTimeout(() => {
            document.body.style.height = `${scrollContainer.current!.getBoundingClientRect().height}px`
            setLoading(false)
        }, 2000);
    }, [size.height])



    const warn = (
        <span>Website link sometimes <b>does not work</b> because of Railway&apos;s <b>free tier monthly usage limits.</b></span>
    )


    return (
        <>
            <Head>
                <title>{loading ? "Fetching Data..." : "Alvarez | Projects"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="projects" />
            </Head>
            <section className='fixed top-0 left-0 w-full h-fit overflow-hidden right-0 mx-auto' ref={app}>
                <div className="w-full h-auto border-b-[1px] border-t-[1px] border-black" ref={scrollContainer}>
                    <div className="w-full min-h-[85vh] h-auto bg-white dark:bg-black px-8 flex justify-center pt-32 pb-28 smooth">
                        <div className="w-fit h-auto font-poppins md:flex mx-auto md:mt-10 gap-x-[15vw]">

                            <div className="grid gap-x-0 grid-cols-headerGrid w-full md:grid-cols-deskH md:w-fit">
                                <div className=" w-[4rem]">
                                    <h2 className="font-semibold text-xl text-darkgrey 2xl:text-2xl dark:text-white">Year</h2>
                                    <p className="text-sm text-grey mt-3 2xl:text-lg 2xl:mt-6 dark:text-darkwhite">{project.year}</p>
                                </div>

                                <div className="w-fit place-self-start 2xl:ml-8">
                                    <h2 className="font-semibold text-xl text-darkgrey 2xl:text-2xl dark:text-white">What I did</h2>
                                    <ul className="text-sm min-w-[11rem] text-grey 2xl:text-lg 2xl:mt-6 dark:text-darkwhite">
                                        {project.what.map((items, i) => {
                                            return (
                                                <li key={i} className="mt-3 2xl:mt-4">{items}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                            </div>

                            <div className="mt-10 w-auto md:mt-0">
                                <h1 className="font-bold text-4xl text-darkgrey 2xl:text-7xl dark:text-white ">{project.title}</h1>
                                <p className="text-sm max-w-[26.6rem] text-grey md:leading-8 2xl:text-lg 2xl:max-w-[38rem] 2xl:mt-6 2xl:leading-9 mt-6 dark:text-darkwhite">{project.desc}{project.title === 'LISTA' ? warn : project.title === 'UNIX' ? warn : null}</p>

                                <WebsiteButton website={project.website} source={project.source} />

                            </div>

                        </div>
                    </div>

                    <div className="w-full h-auto bg-projgrey dark:bg-myBlack relative top-0 pb-20 lg:pb-40 2xl:pb-60 smooth">
                        <div className='w-full px-8 flex justify-center md:max-w-[65vw] mx-auto'>

                            <div className='w-full h-auto mt-[-7rem] flex flex-col'>
                                {project.images.map((items) => {
                                    return (
                                        <PagesTemplate image={`/Projects/${items}`} alt={items} key={items} />
                                    )
                                })}

                            </div>

                        </div>
                    </div>

                    <Phone phone={project.phone} />
                    <Last last={project.last} />
                    <Footer />
                </div>
            </section>
        </>

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