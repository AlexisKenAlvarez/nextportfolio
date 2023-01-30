import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'

const WebsiteButton = ({website, source}: {website: string, source: string}) => {
    return (
        <div className='text-grey flex items-center w-[11rem] mt-10 h-[2.5rem] select-non overflow-hidden relative mb-14'>
            <Link href={website} rel="noreferrer" target="_blank" className='cursor-pointer relative w-[8rem] h-full flex items-center hover:w-full bg-white dark:bg-black hover:z-10 z-0 transition-all ease-in-out duration-500 hover:bg-black border-t-[1px] border-l-[1px] border-b-[1px] border-grey dark:hover:border-lightg rounded-tl-md rounded-bl-md hover:rounded-tr-md hover:rounded-br-md hover:text-lightg group dark:hover:border-r-[1px]'>

                <p className='text-sm ml-[1.3rem] group-hover:translate-x-2 transition-transform dark:transition-all duration-500 dark:duration-500 dark:text-white dark:group-hover:text-lightg'>Visit website</p>
                <CgArrowLongRight className="absolute left-[5.5rem] text-2xl group-hover:translate-x-10 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 text-lightg" />
            </Link>

            <Link href={source} rel="noreferrer" target="_blank" className="border-[1px] rounded-tr-md rounded-br-md border-grey h-full flex items-center cursor-pointer absolute right-0 bg-white dark:bg-black z-0 hover:bg-black hover:text-lightg  transition-all duration-500 w-[3rem] hover:w-full hover:rounded-tl-md hover:rounded-bl-md group dark:hover:border-lightg">
                <p className='text-sm transition-all group-hover:ml-7 duration-500 absolute w-[6rem] opacity-0 translate-x-[-5rem] group-hover:translate-x-0 group-hover:opacity-100 text-lightg z-0 pointer-events-none'>Source code</p>
                <AiFillGithub className='text-2xl ml-auto mr-[0.7rem] group-hover:translate-x-[-0.7rem] transition-transform dark:transition-all duration-500 z-10 dark:text-white dark:group-hover:text-lightg dark:duration-500' />
            </Link>
        </div>
    );
}

export default WebsiteButton;