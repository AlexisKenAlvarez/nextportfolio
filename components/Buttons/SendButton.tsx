import { FunctionComponent } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'


interface myProp {
    className?: string,
    text: string,
    onClick?: () => void
}

const SendButton: FunctionComponent<myProp> = (props) => {
    const { className, onClick, text } = props
    return (
        <div className={`w-fit px-6 font-courier py-3 rounded font-medium cursor-pointer hover:opacity-100 transition-all ease-in-out clip-path-forButton flex items-center ${className}`} onClick={onClick}>
            {text}
            <RiSendPlaneFill className='ml-2'/>
        </div>
    );
}

export default SendButton;