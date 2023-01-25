import { FunctionComponent } from "react";
import { currStackTerminal } from "../../utils/ObjectList";
import { otherSkillsTerminal } from "../../utils/ObjectList";

interface prop {
    value: string
}

const Stack: FunctionComponent<prop> = ({ value }) => {
    return (
        <div className='w-full mt-5 selection:bg-white selection:text-black'>
            <p className='break-words w-auto overflow-hidden '>Z:\Users\&#62;{value}</p>

            <p className=" mt-2">Current Stack: </p>
            <ul className="mt-2">
                {currStackTerminal.map((items, i) => {
                    return (
                        <li className='flex ml-3' key={i}>
                            <div className='w-[2.5rem] flex items-center'>{items.image}</div>

                            <div className='w-fit cursor-pointer hover:underline'>
                                <a target="_blank" href={items.link} rel="noreferrer">
                                    {items.label}
                                </a>
                            </div>
                        </li>
                    )
                })}
            </ul>

            <p className=" mt-2">Other stacks: </p>
            <ul className="mt-2">
                {otherSkillsTerminal.map((items, i) => {
                    return (
                        <li className='flex ml-3' key={i}>
                            <div className='w-[2.5rem] flex items-center'>{items.image}</div>

                            <div className='w-fit cursor-pointer hover:underline'>
                                <a target="_blank" href={items.link} rel="noreferrer">
                                    {items.label}
                                </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Stack;