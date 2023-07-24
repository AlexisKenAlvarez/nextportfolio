import { NextPage } from "next";
import Proj from "../../components/Projects/Projects"
import Head from 'next/head';
import { useRef, useEffect } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Footer from "../../components/Footer/Footer";
import useWindowSize from "../../hooks/useWindowSize";
import Link from 'next/link';

interface sizeType {
    height: number,
    width: number
}

const Projects: NextPage = () => {
    const app = useRef(null)
    const scrollContainer = useRef<HTMLDivElement>(null)
    const size = useWindowSize()

    useEffect(() => {
        document.body.style.height = `${scrollContainer.current!.getBoundingClientRect().height}px`
    }, [size.height])

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

    const projList = [
        {
            label: 'lista',
        },
        {
            label: 'tigershop',
        },
        {
            label: 'lucidia',
        },

    ]



    return (
        <>
            <Head>
                <title>Alvarez | Projects</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="projects" />
            </Head>

            {/* <div className="w-full h-fit overflow-x-hidden">
                <Proj />
            </div> */}

            <div className="min-h-screen h-auto w-full bg-white dark:bg-myBlack top-0 fixed left-0 overflow-hidden smooth" ref={app}>
                <div ref={scrollContainer} className="w-full h-full max-w-[1700px] px-10 mx-auto select-none">
                    <div className="flex w-full h-screen items-center justify-center flex-col">
                        <h1 className="font-poppins font-bold md:text-8xl text-darkgrey text-5xl dark:text-darkwhite">PROJECTS</h1>
                        {/* <MdArrowForwardIos className="rotate-90 md:mt-16 mt-10 md:text-5xl text-3xl text-darkgrey"/> */}
                    </div>
                    <div className="w-full h-auto pb-64">
                        <ul className="font-poppins font-bold md:text-7xl text-white dark:text-myBlack text-5xl text-center flex flex-col gap-y-32 w-fit mx-auto ul">
                            {projList.map((items) => {
                                return (
                                    <Link href={`/projects/${items.label}`} scroll={false} key={items.label}>
                                        <li className="w-fit mx-auto cursor-pointer hover:text-darkgrey transition-all ease-in-out duration-500 dark:hover:text-white ul uppercase">{items.label}</li>
                                    </Link>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Projects;