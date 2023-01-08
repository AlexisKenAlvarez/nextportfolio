import Image from 'next/image';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillFacebook } from 'react-icons/ai'


export const current = [
    {
        id: 1,
        name: 'NextJS', 
        image: <Image alt="next" width="100" height="100" src="/current/next.webp" className='drop-shadow-md dark:invert'/>
    },
    {
        id: 2,
        name: 'ReactJS', 
        image:<Image alt="react" width="70" height="70" src="/current/react.webp" className='drop-shadow-md' />
    },
    {
        id: 3,
        name: 'Tailwind', 
        image: <Image alt="tailwind" width="80" height="80" src="/current/tailwind.webp" />
    },
    {
        id: 4,
        name: 'MongoDB', 
        image: <Image alt="mongodb" width="110" height="110" src="/current/mongo.webp" className='mb-[-1.5rem] dark:brightness-200 drop-shadow-lg'/>
    },
    {
        id: 5,
        name: 'Prisma', 
        image: <Image alt="prisma" width="100" height="100" src="/current/prisma.webp" className='mb-[-1rem] dark:greyscale dark:invert'/>
    } 
]

export const soc = [
    <a href="https://github.com/AlexisKenAlvarez" target="_blank" rel="noopener noreferrer" key="1">
        <AiOutlineGithub />
    </a>,
    <a href="https://www.instagram.com/alexiskenalvarez/" target="_blank" rel="noopener noreferrer" key="2">
        <AiFillInstagram />
    </a>,
    <a href="https://www.linkedin.com/in/alexiskenalvarez/" target="_blank" rel="noopener noreferrer" key="3">
        <AiFillLinkedin />
    </a>,
    <a href="mailto:alexisken1432@gmail.com" target="_blank" rel="noopener noreferrer" key="4">
        <AiFillMail />
    </a>,
    <a href="https://www.facebook.com/alvarez.aki/" target="_blank" rel="noopener noreferrer" key="5">
        <AiFillFacebook />
    </a>,
]


export const other = [
    {
        id: 1,
        name: 'HTML', 
        image: <Image alt="html" width="50" height="50" src="/otherskills/html.webp"/>
    },
    {
        id: 2,
        name: 'CSS', 
        image: <Image alt="css" width="50" height="50" src="/otherskills/css.webp"/>
    },
    {
        id: 3,
        name: 'Javascript', 
        image: <Image alt="js" width="55" height="55" src="/otherskills/js.webp"/>
    },
    {
        id: 4,
        name: 'Typescript', 
        image: <Image alt="ts" width="50" height="50" src="/otherskills/ts.webp"/>
    },
    {
        id: 5,
        name: 'Sass', 
        image: <Image alt="scss" width="70" height="70" src="/otherskills/scss.webp" className='mb-[-1rem]'/>
    },
    {
        id: 6,
        name: 'Firebase', 
        image: <Image alt="firebase" width="60" height="60" src="/otherskills/firebase.webp" className='mb-[-1rem] drop-shadow-md'/>
    },
    {
        id: 7,
        name: 'Figma', 
        image: <Image alt="figma" width="40" height="40" src="/otherskills/figma.webp" className='drop-shadow-md'/>
    },
    {
        id: 8,
        name: 'Python', 
        image: <Image alt="python" width="50" height="50" src="/otherskills/python.webp" className='mb-[-1rem]'/>
    },
    {
        id: 9,
        name: 'Git', 
        image: <Image alt="git" width="50" height="80" src="/otherskills/git.webp" className='mb-[-1rem]'/>
    },
    {
        id: 10,
        name: 'MySQL', 
        image: <Image alt="mysql" width="100" height="100" src="/otherskills/mysql.webp"/>
    },
    {
        id: 11,
        name: 'NodeJS', 
        image: <Image alt="nodejs" width="80" height="80" src="/otherskills/node.webp" className='mb-[-1rem] drop-shadow-md dark:brightness-200'/>
    },
    {
        id: 12,
        name: 'Java', 
        image: <Image alt="java" width="50" height="50" src="/otherskills/java.webp" className='drop-shadow-md'/>
    },
    
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
        value: 'Study programming, Gaming, Cycling, Chess',
    },
]

export const projectList = [
    {
        num: '01',
        title: 'Lista',
        desc: 'Fully responsive assignment tracker with authentication. I used MERN stack for this project.',
        img: 'Lista.webp'
    },
    {
        num: '02',
        title: 'Unix',
        desc: 'Fully responsive e-commerce website with add to cart system similar to Shopee, made with MERN stack.',
        img: 'Unix.webp'
    },
    {
        num: '03',
        title: 'Portfolio (Old)',
        desc: 'My first ever portfolio, made with HTML, CSS, JS and GSAP for animations. It features my small projects and skills.',
        img: 'OldPortfolio.webp'
    },
]