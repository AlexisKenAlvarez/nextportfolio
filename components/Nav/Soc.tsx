import { AnimatePresence } from "framer-motion";
import { FunctionComponent } from "react";
import { soc } from "../../utils/ObjectList";


const Soc: FunctionComponent = (props) => {
    return (
        <div className="fixed bottom-0 lg:bottom-2 lg:left-2 lg:w-10 w-full lg:h-72 h-12 bg-white lg:bg-transparent opacity-1 z-20 dark:bg-[#333333] dark:lg:bg-transparent">
            <ul className="flex lg:flex-col w-full justify-center items-center relative h-full pb-0">
                {soc.map((items, index) => {
                    return (
                        <li key={index} className="mx-3 lg:mb-4 text-2xl text-grey cursor-pointer dark:text-darkerwhite dark:hover:text-lightg hover:text-black transition-all ease-in-out duration-[0.3s]">
                            {items}
                        </li>
                    )
                })}
                <div className="h-full w-[2px] bg-grey lg:block hidden"></div>
            </ul>
        </div>
    );
}

export default Soc;
