import { FunctionComponent } from 'react'
import { info1, info2 } from '../utils/ObjectList';
import Projects from './Projects';
import Skills from './Skills';

const About: FunctionComponent = () => {

    return (
        <div className="h-fit w-full relative z-[1] pb-[14rem]">
            <div className="w-full max-w-[1600px] mx-auto">
                <div className="w-[80%] xl:w-[72%] lg:w-[80%] mx-auto">
                    <h1 className="font-quicksand text-mygreen font-semibold text-lg dark:text-lightg">About</h1>
                    <div className="flex justify-between dark:text-white">
                        <h2 className="text-2xl font-raleway font-semibold">Everything you need to know</h2>
                        <h2 className="text-2xl font-raleway font-semibold hidden lg:block">Years of experience</h2>
                    </div>
                    <div className="sm:flex sm:gap-3">
                        <div className="border-[1px] border-black shadow-forBox h-fit flex flex-col gap-y-10 p-5 py-10 mt-5 w-full max-w-[360px] sm:max-w-[1600px] xl:flex-row lg:pl-14 xl:gap-x-16 2xl:gap-x-32">

                            <div className="font-raleway font-medium">
                                {info1.map(details => {
                                    return (
                                        <div key={details.id} className="flex mb-3 xl:mb-[35px]">
                                            <p className="w-[5.8rem] opacity-70 dark:text-white">{details.label}: </p>
                                            <p className="ml-3 text-mygreen dark:text-lightg">{details.value}</p>
                                        </div>
                                    )
                                })
                                }

                            </div>

                            <div className="font-raleway font-medium">
                                {info2.map(details => {
                                    return (
                                        <div key={details.id} className="flex mb-3 xl:mb-[35px]">
                                            <p className="w-[7rem] opacity-70 dark:text-white">{details.label}: </p>
                                            <p className="ml-3 text-mygreen w-[12rem] dark:text-lightg">{details.value}</p>
                                        </div>
                                    )
                                })
                                }
                            </div>

                        </div>
                        <div className="flex flex-col sm:flex-col-reverse lg:flex-col">
                            <h2 className="text-2xl font-raleway font-semibold lg:hidden mt-10 sm:text-right sm:w-[11rem]">Years of experience</h2>
                            <div className="flex gap-x-2 font-raleway text-center mt-5 sm:flex-col sm:gap-y-3">
                                <div className="border-[1px] border-black shadow-forBox h-fit py-10 w-[11rem]">
                                    <h1 className="text-5xl mb-7 font-semibold text-mygreen dark:text-lightg">3+</h1>
                                    <p className='dark:text-white'>HTML, CSS, JS</p>
                                </div>
                                <div className="border-[1px] border-black shadow-forBox h-fit py-10 w-[11rem]">
                                    <h1 className="text-5xl mb-7 font-semibold text-mygreen dark:text-lightg">1+</h1>
                                    <p className='dark:text-white'>React/NextJS</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SKILLS */}
                <Skills/>

            </div>

            <Projects/>
        </div>
    );
}

export default About;

