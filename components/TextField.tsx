import {FC} from 'react'
import classList from '../utils/classList'
import {useCampusxForm} from './Form'

type Props = {
    name: string;
    className?: any;
    type: 'text' | 'password'
}
const TextField: FC<Props> = ({ name, type, children, className }) => {
    const baseStyles = "mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-base border-gray-300 rounded-md"
    const {register} = useCampusxForm();
    return (
        <input ref={register} type={type} name={name} className={classList(baseStyles, className)} />
    )
}
export default TextField