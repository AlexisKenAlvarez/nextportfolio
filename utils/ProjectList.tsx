export const lista =
{
    year: '2022',
    what: ['UI/UX Design', 'Front-end development', 'Back-end development'],
    title: 'LISTA',
    desc: 'We had a lot of activities going on at the time I had this idea, so instead of looking for a to-do list app or assignment tracker on Google, I built my own web app.',
    website: 'https://lista-ph.netlify.app/',
    source: 'https://github.com/AlexisKenAlvarez/Lista',
    images: ['lista/1.png', 'lista/2.png', 'lista/3.webp', 'lista/4.webp', 'lista/5.webp'],
    phone: 'lista/phone.webp',
    last: 'lista/last.webp',
}


export const unix =
{
    year: '2022',
    what: ['UI/UX Design', 'Front-end development', 'Back-end development'],
    title: 'UNIX',
    desc: 'This project was for practicing my CRUD operations, and the theme I thought of is something similar to Shopee. A shopping web based app with user accounts and add to cart functionality.',
    website: 'https://unix-e.netlify.app/',
    source: 'https://github.com/AlexisKenAlvarez/unix',
    images: ['/unix/1.webp', '/unix/2.webp', '/unix/3.webp', '/unix/4.webp',],
    phone: 'unix/phone.webp',
    last: 'unix/last.webp',
}

export const tigershop =
{
    year: '2022',
    what: ['Front-end development', 'Back-end development'],
    title: 'Tigershop',
    desc: 'A merchandise shop for our department. This is a baby thesis for COSC 75. I did all the development while one of my group member handled the UI/UX. Registration is exclusive only to CvSU bonafide students.',
    website: 'https://tigershop.vercel.app/',
    source: 'https://github.com/AlexisKenAlvarez/tigershopts',
    images: ['/tigershop/1.webp', '/tigershop/2.webp', '/tigershop/3.webp', '/tigershop/4.webp', '/tigershop/5.webp','/tigershop/6.webp',],
    phone: 'tigershop/phone.webp',
    last: 'tigershop/last.webp',
}

export interface projectType {
    year: string
    what: string[]
    title: string
    desc: string
    website: string
    source: string
    images: string[]
    phone: string
    last: string
}

