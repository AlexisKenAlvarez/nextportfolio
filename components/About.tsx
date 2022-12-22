import { FunctionComponent } from 'react'
import { current, info1, info2 } from '../utils/ObjectList';

const About: FunctionComponent = () => {

    return (
        <div className="h-[150rem] w-full bg-topog relative z-[-1]">
            <div className="w-full max-w-[1600px] mx-auto">
                <div className="w-[80%] xl:w-[72%] lg:w-[80%] mx-auto">
                    <h1 className="font-quicksand text-mygreen font-semibold text-lg">About</h1>
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-raleway font-semibold">Everything you need to know</h2>
                        <h2 className="text-2xl font-raleway font-semibold hidden lg:block">Years of experience</h2>
                    </div>
                    <div className="sm:flex sm:gap-3">
                        <div className="border-[1px] border-black shadow-forBox h-fit flex flex-col gap-y-10 p-5 py-10 mt-5 w-full max-w-[360px] sm:max-w-[1600px] xl:flex-row lg:pl-14 xl:gap-x-16 2xl:gap-x-32">

                            <div className="font-raleway font-medium">
                                {info1.map(details => {
                                    return (
                                        <div key={details.id} className="flex mb-3 xl:mb-[35px]">
                                            <p className="w-[5.8rem] opacity-70">{details.label}: </p>
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
                                            <p className="w-[7rem] opacity-70">{details.label}: </p>
                                            <p className="ml-3 text-mygreen w-[12rem]">{details.value}</p>
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

                {/* SKILLS */}
                <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto mt-36'>
                    <h1 className="font-quicksand text-mygreen font-semibold text-lg">Skills</h1>
                    <h2 className="text-2xl font-raleway font-semibold">Current stack</h2>

                    <div className='w-[7rem] h-[2px] bg-grey'>
                        <div className='clip-path-underline w-16 h-16 bg-grey mt-1'></div>
                    </div>

                    <div className="w-full h-auto grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-y-7 max-w-[300px] sm:max-w-[500px] sm:gap-y-10 sm:grid-cols-3 sm:grid-rows-2 md:max-w-[700px] md:grid-cols-4 lg:max-w-full lg:grid-cols-5 lg:grid-rows-1 mx-auto mt-12">
                        {current.map((items) => {
                            return (
                                <div className='h-[10rem] w-[7rem] xl:w-[9.5rem] relative' key={items.id}>
                                    <div className='w-full h-[60%] flex justify-center items-center'>
                                        {items.image}
                                    </div>
                                    <div className='w-full'>
                                        <div className='mx-auto w-full border-t-2 border-black mt-0 shadow-forBox'></div>
                                        <div className='mx-auto w-[50%] border-t-2 border-mygreen mt-2 shadow-forBox'></div>
                                        <div className='mx-auto w-[20%] border-t-2 border-mygreen mt-2 shadow-forBox'></div>
                                    </div>
                                    <p className='absolute bottom-[-1rem] w-full text-center font-quicksand font-semibold'>{items.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>



            </div>
        </div>
    );
}

export default About;