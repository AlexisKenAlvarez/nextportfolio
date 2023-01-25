import { FunctionComponent } from "react";
import { commands } from "../../utils/ObjectList";

interface prop {
    value: string
}

const Help:FunctionComponent<prop> = ({value}) => {
    return (
        <div className='w-full mt-5 selection:bg-white selection:text-black'>
            <p className='break-words w-auto overflow-hidden '>Z:\Users\&#62;{value}</p>

            <p className=" mt-2">Valid commands: </p>
            <ul className="mt-2">
                {commands.map((items, i) => {
                    return (
                        <li className='flex ml-3' key={i}>
                            <div className='w-full max-w-[12rem]'>-- {items.command}</div>
                            <div className='w-full'>{items.desc}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Help;