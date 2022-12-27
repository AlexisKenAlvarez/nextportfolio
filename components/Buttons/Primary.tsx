import { FunctionComponent } from 'react'

interface myProp {
    className?: string,
    text: string,
    onClick?: () => void
}

const Primary: FunctionComponent<myProp> = (props) => {
    const { className, onClick, text } = props
    return (
        <div className={`w-fit px-6 bg-black opacity-70 text-white font-courier py-3 rounded font-medium cursor-pointer hover:text-lightg hover:opacity-100 transition-all ease-in-out clip-path-forButton ${className}`} onClick={onClick}>
            {text}
        </div>
    );
}

export default Primary;