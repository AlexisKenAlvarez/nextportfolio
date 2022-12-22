import { FunctionComponent } from 'react'
import { current, other } from '../utils/ObjectList';

const Skills: FunctionComponent = () => {
    return (
        <>
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
                                <div className='group peer w-full h-[60%] flex justify-center items-center cursor-pointer'>
                                    <div className='w-fit h-fit relative group-hover:mt-[-1.5rem] z-8 z-10 transition-all ease-in-out select-none'>
                                        {items.image}
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='mx-auto w-full border-t-2 border-black mt-0 shadow-forBox'></div>
                                    <div className='mx-auto w-[50%] border-t-2 border-mygreen mt-2 shadow-forBox'></div>
                                    <div className='mx-auto w-[20%] border-t-2 border-mygreen mt-2 shadow-forBox'></div>
                                </div>
                                <p className='absolute bottom-[-1rem] w-full text-center font-quicksand font-semibold text-grey select-none peer-hover:text-mygreen peer-hover:font-bold transition-all ease-in-out'>{items.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto mt-36'>
                <h2 className="text-2xl font-raleway font-semibold text-center">Other skills</h2>

                <div className='w-[8rem] h-[2px] bg-grey mx-auto'>
                    <div className='clip-path-underline w-16 h-16 bg-grey mt-1'></div>
                </div>

                <div className="w-full h-auto grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-y-9 max-w-[300px] sm:max-w-[500px] sm:gap-y-10 sm:grid-cols-3 sm:grid-rows-2 md:max-w-[700px] md:grid-cols-4 lg:gap-y-16  lg:max-w-full lg:grid-cols-5 lg:grid-rows-1 mx-auto mt-20">
                    {other.map((items) => {
                        return (
                            <div className='h-[10rem] w-[7rem] xl:w-[9.5rem] relative' key={items.id}>
                                <div className=' group w-full h-[60%] flex justify-center items-center select-none peer cursor-pointer'>
                                    <div className='w-fit h-fit relative group-hover:mt-[-1.5rem] z-8 z-10 transition-all ease-in-out select-none'>
                                        {items.image}
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='mx-auto w-full border-t-2 border-black mt-0 shadow-forBox'></div>
                                    <div className='mx-auto w-[50%] border-t-2 border-mygreen mt-2 shadow-forBox'></div>
                                    <div className='mx-auto w-[20%] border-t-2 border-mygreen mt-2 shadow-forBox'></div>
                                </div>
                                <p className='absolute bottom-[-1rem] w-full text-center font-quicksand font-semibold text-grey select-none peer-hover:text-mygreen peer-hover:font-bold transition-all ease-in-out'>{items.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Skills;