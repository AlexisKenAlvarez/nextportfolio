import { FunctionComponent } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'


interface myProp {
    className?: string,
    text: React.ReactNode,
    debounce: boolean,
    onClick?: () => void
    done: boolean
}

const SendButton: FunctionComponent<myProp> = (props) => {
    const { className, onClick, text, debounce, done} = props
    return (
        <div className={`px-6 font-courier py-3 rounded font-medium cursor-pointer hover:opacity-100 transition-all ease-in-out clip-path-forButton flex items-center duration-300 ${className}`} onClick={onClick} style={done ? {width: "100%", opacity: "100", pointerEvents: "none"} : {}}>
            {text}
        </div>
    );
}

export default SendButton;