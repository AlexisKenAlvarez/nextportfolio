import Image from 'next/image';
import { FunctionComponent, useState } from 'react';


interface props {
    image: string,
    alt: string
}

const PagesTemplate: FunctionComponent<props> = ({ image, alt }) => {
    const [show, setShow] = useState(false)

    return (
        <div className='w-full h-auto md:mb-16 mb-12 relative'>
            <div className="w-full md:h-[2rem] h-[1.7rem] bg-[#EAEAEA] dark:bg-[#2E2E2E] rounded-tl-lg rounded-tr-lg">
                <div className='h-full w-[3rem] flex justify-around items-center ml-3'>
                    <div className="w-2 h-2 rounded-full bg-[#A7A7A7]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#A7A7A7]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#A7A7A7]"></div>
                </div>
            </div>


            <Image src={image} alt={alt} sizes="100vw" height="0" width="0" className='w-full h-auto' unoptimized={true}></Image>


        </div>
    );
}

export default PagesTemplate;