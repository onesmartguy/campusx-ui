import {FC} from 'react'
import classList from '../utils/classList'
import {useCampusxForm} from './Form'
import TextField from './TextField'
import Label from './Label'

type Props = {
    name: string;
    type: 'text' |  'password';
    description?: string;
    className?: any;
}
const FormField: FC<Props> = ({ name, type, description, className }) => {
    const {register} = useCampusxForm();
    return (
        <div className={className}>
            <Label name={name} description={description} />
            <TextField type={type} name={name} />
        </div>
    )
}
export default FormField