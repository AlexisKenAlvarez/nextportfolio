import { FunctionComponent } from 'react'

interface BoxProps {
    children: React.ReactNode;
};

const Box: FunctionComponent<BoxProps> = (props) => {
    return (
        <div className="border-2 border-black w-36 h-40 shadow-forBox flex justify-center items-center select-none">
            {props.children}
        </div>
    );
}

export default Box;