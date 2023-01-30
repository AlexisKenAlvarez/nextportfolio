import Image from 'next/image';



const Last = ({ last }: { last: string }) => {

    return (
        <div className='w-full h-[75vh] bg-projgrey relative top-0 smooth dark:bg-myBlack'>
            <Image src={`/Projects/${last}`} alt="Last" fill className="object-contain mx-auto" priority></Image>
        </div>
    );
}

export default Last;