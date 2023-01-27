import { AiFillGithub } from 'react-icons/ai'
import { CgArrowLongRight } from 'react-icons/cg'

const Lista = () => {

    const contrib = ['UI/UX Design', 'Front-end development', 'Back-end development']

    return (
        <section className="w-full h-auto">
            <div className="w-full min-h-[75vh] h-auto bg-white mt-[-7.1rem] px-8 flex justify-center pt-32 pb-[7rem]">
                <div className="w-fit h-auto font-poppins md:flex mx-auto md:mt-10 gap-x-[15vw]">

                    <div className="grid gap-x-0 grid-cols-headerGrid w-full md:grid-cols-deskH md:w-fit">
                        <div className=" w-[4rem]">
                            <h2 className="font-semibold text-xl text-darkgrey 2xl:text-2xl">Year</h2>
                            <p className="text-sm text-grey mt-3 2xl:text-lg 2xl:mt-6">2022</p>
                        </div>

                        <div className="w-fit place-self-start 2xl:ml-8">
                            <h2 className="font-semibold text-xl text-darkgrey 2xl:text-2xl ">What I did</h2>
                            <ul className="text-sm min-w-[11rem] text-grey 2xl:text-lg 2xl:mt-6">
                                {contrib.map((items, i) => {
                                    return (
                                        <li key={i} className="mt-3 2xl:mt-4">{items}</li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>

                    <div className="mt-10 w-auto md:mt-0">
                        <h1 className="font-bold text-4xl text-darkgrey 2xl:text-7xl ">LISTA</h1>
                        <p className="text-sm max-w-[26.6rem] text-grey md:leading-8 2xl:text-lg 2xl:max-w-[38rem] 2xl:mt-6 2xl:leading-9">We had a lot of activities going on at the time I had this idea, so instead of looking for a to-do list app or assignment tracker on Google, I built my own web app. Website link sometimes <b>does not work</b> because of Railway's <b>free tier monthly usage limits.</b></p>

                        <div className='text-grey flex items-center w-[11rem] mt-10 h-[2.5rem] select-non overflow-hidden relative'>
                            <div className='cursor-pointer relative w-[8rem] h-full flex items-center hover:w-full bg-white hover:z-10 z-0 transition-all ease-in-out duration-500 hover:bg-black border-t-[1px] border-l-[1px] border-b-[1px] border-grey rounded-tl-md rounded-bl-md hover:rounded-tr-md hover:rounded-br-md hover:text-lightg group'>

                                <p className='text-sm ml-[1.3rem] group-hover:translate-x-2 transition-transform duration-500'>Visit website</p>
                                <CgArrowLongRight className="absolute left-[5.5rem] text-2xl group-hover:translate-x-10 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 text-lightg"/>
                            </div>
                            <div className='border-[1px] rounded-tr-md rounded-br-md border-grey h-full flex items-center cursor-pointer absolute right-0 bg-white z-0 hover:bg-black hover:text-lightg transition-all duration-500 w-[3rem] hover:w-full hover:rounded-tl-md hover:rounded-bl-md group'>
                                <p className='text-sm transition-all group-hover:ml-7 duration-500 absolute w-[6rem] opacity-0 translate-x-[-5rem] group-hover:translate-x-0 group-hover:opacity-100 text-lightg z-0 pointer-events-none'>Source code</p>
                                <AiFillGithub className='text-2xl ml-auto mr-[0.7rem] group-hover:translate-x-[-0.7rem] transition-transform duration-500 z-10'/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full h-screen bg-projgrey relative top-0">

            </div>
        </section>
    );
}

export default Lista;