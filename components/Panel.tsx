import {FC} from 'react'
import classList from '../utils/classList'
import {useCampusxForm} from './Form'
import TextField from './TextField'
import Button from './Button'

type Props = {
    title?: string;
    actionButtonText?: string,
    actionButtonIcon?: string,
    onActionClick?: () => void,
    onSearchChanged?: () => void,
    searchPlaceholder?: string,
    className?: any;
}
const Panel: FC<Props> = ({ title, actionButtonText, actionButtonIcon, onSearchChanged, onActionClick, searchPlaceholder, children, className }) => {
    const baseStyles = "mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-base border-gray-300 rounded-md"
    
    return (
        <section>
            <header>
                <h2>{title}</h2>
                <div>
                    { onSearchChanged && <TextField type="text" name="search"  />}
                    { onActionClick && actionButtonText  && <Button>{actionButtonText}</Button>}
                </div>
            </header>
            <div>
                {children}
            </div>
        </section>
    )
}
export default Panel