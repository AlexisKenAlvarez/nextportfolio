import Image from 'next/image';
import { FunctionComponent } from 'react';

interface props {
    image: string,
    alt: string
}

const PagesTemplate: FunctionComponent<props> = ({ image, alt }) => {
    return (
        <div className='w-full h-auto md:mb-16 mb-12'>
            <div className="w-full md:h-[2rem] h-[1.7rem] bg-[#EAEAEA] rounded-tl-lg rounded-tr-lg">
                <div className='h-full w-[3rem] flex justify-around items-center ml-3'>
                    <div className="w-2 h-2 rounded-full bg-[#A7A7A7]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#A7A7A7]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#A7A7A7]"></div>
                </div>
            </div>

            <Image src={`/Projects/${image}`} width="3000" height="3000" alt={alt} unoptimized={true}></Image>
        </div>
    );
}

export default PagesTemplate;