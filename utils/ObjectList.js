import Image from 'next/image';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillFacebook, AiFillHtml5 } from 'react-icons/ai'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import { RiReactjsFill } from 'react-icons/ri'
import { SiMongodb, SiPrisma, SiTypescript, SiJavascript, SiFirebase, SiPython, SiGit, SiMysql, SiJava } from  'react-icons/si'
import { DiCss3, DiSass } from  'react-icons/di'
import { CgFigma } from 'react-icons/cg'
import { FaNodeJs } from 'react-icons/fa'

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
        image: <Image alt="mongodb" width="110" height="110" src="/current/mongo.webp" className='mb-[-1.5rem] dark:brightness-200 drop-shadow-lg dark:invert'/>
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
export const sideItems = [
    {
        label: "home",
        link: "/"
    },
    {
        label: "projects",
        link: "/projects"
    },
    {
        label: "contact",
        link: "/contact"
    },

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
        img: 'Lista.webp',
        link: '/projects/lista'
    },
    {
        num: '02',
        title: 'Tigershop',
        desc: 'Our baby thesis for COSC 75. A merchandise shop for CEIT Department and organizations under it.',
        img: 'Tigershop.webp',
        link: '/projects/tigershop'

    },
    {
        num: '03',
        title: 'Lucidia',
        desc: 'A website for my client. Converted figma to a pixel perfect web version using react.',
        img: 'Lucidia.webp',
        link: '/projects/lucidia'
    },

]
export const commands = [
    {
        command: '/about',
        desc: 'View all the details that you need to know about me.'
    },
    {
        command: '/stacks',
        desc: 'View my current stack and other stacks that I worked on.'
    },
    {
        command: '/contact',
        desc: 'View all my social media and email'
    },
    {
        command: '/projects',
        desc: 'View some of my projects.'
    },
    {
        command: '/help',
        desc: 'View all valid commands.'
    },
    {
        command: '/clr',
        desc: 'Clear the terminal.'
    },
    {
        command: '/exit',
        desc: 'Exit the terminal.'
    },
    
]
export const aboutTerminal = [
    {
        label: 'Fullname',
        value: 'Alexis Ken R. Alvarez'
    },
    {
        label: 'Address',
        value: 'Alfonso Cavite'
    },
    {
        label: 'Nationality',
        value: 'Filipino'
    },
    {
        label: 'Country',
        value: 'Philippines'
    },
    {
        label: 'Language',
        value: 'Tagalog, English'
    },
    {
        label: 'Primary and Secondary',
        value: 'Saint Joseph Parochial School of Cavite'
    },
    {
        label: 'Tertiary',
        value: 'Cavite State University'
    },
    {
        label: 'Course',
        value: 'BS Computer Science'
    },
    {
        label: 'Hobbies',
        value: 'Coding, Gaming, Cycling, Chess'
    },
    
]
export const currStackTerminal = [
    {
        image: <TbBrandNextjs/>,
        label: 'NextJS',
        link: 'https://nextjs.org/'
    },
    {
        image: <RiReactjsFill/>,
        label: 'ReactJS',
        link: 'https://reactjs.org/'
    },
    {
        image: <TbBrandTailwind/>,
        label: 'TailwindCSS',
        link: 'https://tailwindcss.com/'
    },
    {
        image: <SiMongodb/>,
        label: 'MongoDB',
        link: 'https://mongodb.com/'
    },
    {
        image: <SiPrisma/>,
        label: 'Prisma',
        link: 'https://www.prisma.io/'
    },
]
export const otherSkillsTerminal = [
    {
        image: <AiFillHtml5/>,
        label: 'HTML',
        link: 'https://www.w3schools.com/html/'
    },
    {
        image: <DiCss3/>,
        label: 'CSS',
        link: 'https://www.w3schools.com/css/'
    },
    {
        image: <SiJavascript/>,
        label: 'Javascript',
        link: 'https://www.w3schools.com/js/'
    },
    {
        image: <SiTypescript/>,
        label: 'Typescript',
        link: 'https://www.typescriptlang.org/'
    },
    {
        image: <DiSass/>,
        label: 'Sass',
        link: 'https://sass-lang.com/'
    },
    {
        image: <SiFirebase/>,
        label: 'Firebase',
        link: 'https://firebase.google.com/'
    },
    {
        image: <CgFigma/>,
        label: 'Figma',
        link: 'https://www.figma.com/'
    },
    {
        image: <SiPython/>,
        label: 'Python',
        link: 'https://www.python.org/'
    },
    {
        image: <SiGit/>,
        label: 'Git',
        link: 'https://git-scm.com/'
    },
    {
        image: <SiMysql/>,
        label: 'MySQL',
        link: 'https://www.mysql.com/'
    },
    {
        image: <FaNodeJs/>,
        label: 'NodeJS',
        link: 'https://nodejs.org/en/'
    },
    {
        image: <SiJava/>,
        label: 'Java',
        link: 'https://www.java.com/en/'
    },
    
]