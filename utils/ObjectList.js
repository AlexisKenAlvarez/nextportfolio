import Image from 'next/image';


export const current = [
    {
        id: 1,
        name: 'NextJS', 
        image: <Image alt="next" width="100" height="100" src="/current/next.webp" />
    },
    {
        id: 2,
        name: 'React', 
        image:<Image alt="react" width="70" height="70" src="/current/react.webp" />
    },
    {
        id: 3,
        name: 'Tailwind', 
        image: <Image alt="tailwind" width="80" height="80" src="/current/tailwind.webp" />
    },
    {
        id: 4,
        name: 'MongoDB', 
        image: <Image alt="mongodb" width="110" height="110" src="/current/mongo.webp" className='mb-[-1.5rem]'/>
    },
    {
        id: 5,
        name: 'Prisma', 
        image: <Image alt="prisma" width="100" height="100" src="/current/prisma.webp" className='mb-[-1rem]'/>
    } 
]

export const info1 = [
    {
        id: '1',
        label: 'Fullname',
        value: 'Alexis Ken R. Alvarez'
    },
    {
        id: '2',
        label: 'Address',
        value: 'Alfonso Cavite'
    },
    {
        id: '3',
        label: 'Nationality',
        value: 'Filipino'
    },
    {
        id: '4',
        label: 'Country',
        value: 'Philippines'
    },
    {
        id: '5',
        label: 'Language',
        value: 'Tagalog, English'
    },
]

export const info2 = [
    {
        id: '1',
        label: 'Primary and Secondary',
        value: 'Saint Joseph Parochial School of Cavite'
    },
    {
        id: '2',
        label: 'Tertiary',
        value: 'Cavite State University'
    },
    {
        id: '3',
        label: 'Course',
        value: 'BS Computer Science'
    },
    {
        id: '4',
        label: 'Hobbies',
        value: 'Coding, Gaming, Cycling'
    },
]