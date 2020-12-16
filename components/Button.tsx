import { tryGetPreviewData } from 'next/dist/next-server/server/api-utils'
import {FC} from 'react'
import classList from '../utils/classList'
type Props = {
    onClick?: () => void;
    className?: any;
    type?: 'button' | 'submit'
}
const Button: FC<Props> = ({ children, onClick, className, type }) => {
    const baseStyles = "inline-flex items-center px-3 w-max py-2 border border-transparent text-sm leading-4 font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
    const colorStyles = "text-indigo-100 bg-blue-800 hover:bg-indigo-700 focus:ring-indigo-500"
    
    return (
        <button type={type} onClick={onClick} className={classList(baseStyles, colorStyles, className)}>
           {children}
        </button>
    )
}
export default Button