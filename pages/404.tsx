import { NextPage } from "next";

const Custom404: NextPage = () => {
    return (
        <div className="bg-black relative w-full h-screen flex justify-center items-center font-raleway font-semibold text-2xl text-white">
            <div className=" absolute top-0 flex justify-center items-center h-screen w-full bg-blackTopog opacity-40"></div>
            <p className="opacity-100">404 Not Found</p>
        </div>

    );
}

export default Custom404;