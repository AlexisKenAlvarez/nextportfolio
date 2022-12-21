import { FunctionComponent } from 'react'

interface BoxProps {
    children: React.ReactNode; // 👈️ type children
};

const Box: FunctionComponent<BoxProps> = (props) => {
    return (
        <div className="border-2 border-black w-36 h-40 shadow-forBox flex justify-center items-center">
            {props.children}
        </div>
    );
}

export default Box;