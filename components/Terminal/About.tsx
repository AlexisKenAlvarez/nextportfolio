import { FunctionComponent } from "react";
import { aboutTerminal } from "../../utils/ObjectList";

interface prop {
    value: string
}

const About:FunctionComponent<prop> = ({value}) => {
    return (
        <div className='w-full mt-5 selection:bg-white selection:text-black'>
            <p className='break-words w-auto overflow-hidden '>Z:\Users\&#62;{value}</p>

            <p className=" mt-2">My details: </p>
            <ul className="mt-2">
                {aboutTerminal.map((items, i) => {
                    return (
                        <li className='flex ml-3' key={i}>
                            <p className="w-[2.5rem]">--</p>
                            <div className='w-full max-w-[12rem]'>{items.label}</div>
                            <div className='w-full'>{items.value}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default About;