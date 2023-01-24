import { FunctionComponent } from "react";

interface prop {
    value: string
}

const Error: FunctionComponent<prop> = (props) => {
    const { value } = props
    return (
        <div className='w-full mt-5 selection:bg-white selection:text-black'>
            <p className='break-words w-auto overflow-hidden '>Z:\Users\&#62;{value}</p>

            <p>'{value}' is not recognized as an internal valid command.</p>
        </div>
    );
}

export default Error;