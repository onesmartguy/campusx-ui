
import {FC} from 'react'
import classList from '../utils/classList'
import {useCampusxForm} from './Form'
type Props = {
    name: string;
    description?: string;
    className?: any;
}
const TextField: FC<Props> = ({ name, description, className }) => {
    const baseStyles = "block text-sm font-medium text-gray-700"
    description = description ?? name;
    return (
        <label htmlFor={name} className={classList(baseStyles, className)}>{description}</label>
    )
}
export default TextField