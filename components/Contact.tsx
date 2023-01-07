import { FunctionComponent } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';
import SendButton from '../components/Buttons/SendButton';

interface myProp {
    className?: string
}

const Contact: FunctionComponent<myProp> = (props) => {
    const { className } = props
    return (
        <div className={`w-full h-[35rem] ${className}`}>
            <div className='w-full max-w-[840px] xl:max-w-[950px] bg-[#F5F5F5] h-[33rem] mx-auto relative rounded-2xl flex border-l-8 border-l-mygreen'>

                {/* <div className='absolute top-10 w-fit h-fit bg-mygreen left-[-2.5rem] px-10 py-2 hidden lg:block'>
                    <p className='font-raleway text-white font-bold text-xl'>Contact</p>
                </div> */}

                <div className='absolute bottom-14 w-fit h-fit bg-mygreen right-[-2.5rem] z-10 px-10 py-2 hidden lg:block'>
                    <p className='font-raleway text-white font-bold text-xl'>Get in touch</p>
                </div>

                <div className='overflow-hidden lg:ml-14 xl:ml-20 lg:mt-5 mx-auto'>
                    <div className='w-fit mx-auto mt-16'>
                        <p className='w-fit text-center mb-2 font-semibold text-mygreen'>Contact</p>
                        <h1 className='font-raleway text-notSoBlack font-[900] lg:text-4xl lg:w-[25rem] text-3xl w-[18rem]'>Let's talk and build together.</h1>
                    </div>

                    <div className='text-lightBorder lg:ml-2 font-quicksand'>
                        <div className='mt-12 lg:w-[21rem] w-[18rem]'>
                            <div className='relative'>
                                <input name="email" className='peer w-full bg-transparent border-b-[3px] border-b-lightBorder outline-0 p-2' autoComplete='off'></input>
                                <label htmlFor="email" className='absolute bottom-3 left-2 transition-all ease-in-out pointer-events-none peer-focus:text-mygreen peer-focus:font-bold peer-focus:translate-y-[-2.2rem] lg:peer-focus:translate-x-[18rem] peer-focus:translate-x-[14rem]'>Email</label>
                                <div className='h-1 pointer-events-none absolute bg-transparent bottom-0 border-b-[3px] border-b-lightg left-0 w-0 transition-all ease-in-out peer-hover:w-full duration-[0.7s] peer-focus:w-full'></div>

                            </div>

                            <div className='relative mt-10'>
                                <TextareaAutosize className='peer w-full resize-none bg-transparent border-b-[3px] border-b-lightBorder outline-0 p-2' name="message" maxRows={2} />
                                <label htmlFor="message" className='absolute top-1 left-2 transition-all ease-in-out pointer-events-none peer-focus:text-mygreen peer-focus:font-bold peer-focus:translate-y-[-2.4rem] lg:peer-focus:translate-x-[16rem]  peer-focus:translate-x-[13rem]'>Message</label>
                                <div className='h-1 pointer-events-none absolute bg-transparent bottom-[6px] border-b-[3px] border-b-lightg left-0 w-0 transition-all ease-in-out peer-hover:w-full duration-[0.7s] peer-focus:w-full'></div>
                            </div>

                            <SendButton text="Send" className='bg-mygreen text-white font-bold ml-auto mt-6' />
                        </div>
                    </div>


                </div>


                <div className='md:block hidden justify-center items-center w-[50%] h-full'>
                    <Image src="/contact/Me.webp" alt="Me" width="300" height="300" className="mx-auto translate-y-[10%] w-[22rem]" />
                </div>
            </div>
        </div>
    );
}

export default Contact;