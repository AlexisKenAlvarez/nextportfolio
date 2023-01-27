import { AiFillGithub } from 'react-icons/ai'
import { CgArrowLongRight } from 'react-icons/cg'
import Image from 'next/image';
import PagesTemplate from '../../components/Templates/PagesTemplate';
import { listaImage } from '../../utils/ImageList'
import Footer from '../../components/Footer/Footer';

const Lista = () => {

    const contrib = ['UI/UX Design', 'Front-end development', 'Back-end development']

    return (
        <section className="w-full h-auto">
            <div className="w-full min-h-[85vh] h-auto bg-white mt-[-7.1rem] px-8 flex justify-center pt-32 pb-[7rem]">
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
                                <CgArrowLongRight className="absolute left-[5.5rem] text-2xl group-hover:translate-x-10 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 text-lightg" />
                            </div>
                            <div className='border-[1px] rounded-tr-md rounded-br-md border-grey h-full flex items-center cursor-pointer absolute right-0 bg-white z-0 hover:bg-black hover:text-lightg transition-all duration-500 w-[3rem] hover:w-full hover:rounded-tl-md hover:rounded-bl-md group'>
                                <p className='text-sm transition-all group-hover:ml-7 duration-500 absolute w-[6rem] opacity-0 translate-x-[-5rem] group-hover:translate-x-0 group-hover:opacity-100 text-lightg z-0 pointer-events-none'>Source code</p>
                                <AiFillGithub className='text-2xl ml-auto mr-[0.7rem] group-hover:translate-x-[-0.7rem] transition-transform duration-500 z-10' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full h-auto bg-projgrey relative top-0 pb-20 lg:pb-40 2xl:pb-60">
                <div className='w-full px-8 flex justify-center md:max-w-[65vw] mx-auto'>

                    <div className='w-full h-auto mt-[-7rem]'>
                        {listaImage.map((items) => {
                            return (
                                <PagesTemplate image={items.image} alt={items.alt} key={items.alt}/>
                            )
                        })}
                        
                    </div>

                </div>
            </div>

            <div className='w-full 2xl:h-[24.3rem] bg-white relative h-[22rem]'>
                <div className="w-full flex md:max-w-[65vw] mx-auto h-full relative px-8 items-center">
                    <div className='max-w-[28rem] 2xl:ml-6'>
                        <h1 className='font-semibold text-xl text-darkgrey 2xl:text-2xl'>Responsive Mobile Design</h1>
                        <p className='max-w-[23rem] text-md text-grey mt-2 2xl:text-lg 2xl:mt-6 2xl:max-w-[25rem]'>The website's pages are all mobile-friendly. Majority of users nowadays spend their time on their mobile devices. This will help users to check their tasks anywhere and anytime as long as they have their phone.</p>
                    </div>
                    <Image src="/Projects/lista/phone.webp" alt="Phone" width="1100" height="1100" unoptimized={true} className="object-contain absolute w-[18rem] 2xl:w-[19.5rem] top-[-4rem] right-0 hidden lg:block mb-0"></Image>
                </div>
            </div>

            <div className='w-full h-auto bg-projgrey relative top-0 pb-20'>
                <Image src="/Projects/lista/last.webp" alt="Last" width="1000" height="1000" className="object-contain mx-auto"></Image>
            </div>
            <Footer/>
        </section>
    );
}

export default Lista;