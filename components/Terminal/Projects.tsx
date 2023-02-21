import { FunctionComponent } from "react";
import { projectList } from "../../utils/ObjectList";

interface prop {
    value: string
}

const Projects: FunctionComponent<prop> = ({ value }) => {
    return (
        <div className='w-full mt-5 selection:bg-white selection:text-black'>
            <p className='break-words w-auto overflow-hidden '>Z:\Users\&#62;{value}</p>

            <p className=" mt-2">Some of my projects: </p>
            <ul className="mt-2">
                {projectList.map((items, i) => {
                    return (
                        <li className='flex ml-3' key={i}>
                            <p className="w-[2.5rem]">--</p>
                            <div className='w-fit cursor-pointer hover:underline'>
                                <a target="_blank" href={items.link} rel="noreferrer">
                                    <div className='w-full max-w-[12rem]'>{items.title}</div>
                                </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Projects;