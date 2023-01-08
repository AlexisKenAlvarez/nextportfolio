import { NextPage } from "next";
import Head from 'next/head';
const Custom404: NextPage = () => {

    return (
        <>
            <Head>
                <title>Alvarez | 404</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="404" />
            </Head>
            <div className="w-full h-screen flex justify-center items-center flex-col">
                <p className="opacity-100 text-black font-raleway text-4xl dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-3xl dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-2xl dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-xl dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-lg dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-md dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-sm dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-xs dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-[10px] dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-[8px] dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-[6px] dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-[4px] dark:text-white font-bold">404 Not Found</p>
                <p className="opacity-100 text-black font-raleway text-[2px] dark:text-white font-bold">404 Not Found</p>
            </div>
        </>

    );
}

export default Custom404;