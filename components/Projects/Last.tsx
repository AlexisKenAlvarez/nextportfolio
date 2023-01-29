import Image from 'next/image';



const Last = ({ last }: { last: string }) => {

    return (
        <div className='w-full h-auto bg-projgrey relative top-0'>
            <Image src={`/Projects/${last}`} alt="Last" width="1000" height="1000" className="object-contain h-fit mx-auto" priority></Image>
        </div>
    );
}

export default Last;