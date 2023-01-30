import Image from 'next/image';

const Phone = ({phone}: {phone: string}) => {
    return (
        <div className='w-full 2xl:h-[24.3rem] bg-white relative h-[22rem] dark:bg-black smooth'>
            <div className="w-full flex md:max-w-[65vw] mx-auto h-full relative px-8 items-center">
                <div className='max-w-[28rem] 2xl:ml-6'>
                    <h1 className='font-semibold text-xl text-darkgrey 2xl:text-2xl dark:text-white'>Responsive Mobile Design</h1>
                    <p className='max-w-[23rem] text-md text-grey mt-2 2xl:text-lg 2xl:mt-6 2xl:max-w-[25rem] dark:text-darkwhite'>The website&apos;s pages are all mobile-friendly. Majority of users nowadays spend their time on their mobile devices. This will help users to check their tasks anywhere and anytime as long as they have their phone.</p>
                </div>
                <Image src={`/Projects/${phone}`} alt="Phone" width="1100" height="1100" className="object-contain absolute w-[18rem] 2xl:w-[19.5rem] bottom-0 right-0 hidden lg:block mb-0"></Image>
            </div>
        </div>
    );
}

export default Phone;