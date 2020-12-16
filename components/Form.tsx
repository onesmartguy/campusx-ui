import {FC, useContext, createContext, Context} from 'react'
import {useForm, useFormContext, FormProvider, SubmitHandler, SubmitErrorHandler, UseFormMethods } from 'react-hook-form';
import classList from '../utils/classList'



export const useCampusxForm = () => {
    const context = useFormContext();
    return context;
}

type Props = {
    onSubmit: SubmitHandler<Record<string, any>>;
    onFailed?: SubmitErrorHandler<Record<string, any>>;
    onStateChanged?: SubmitErrorHandler<Record<string, any>>;
    className?: string;
}

export const Form: FC<Props> = ({onSubmit, onFailed, children, className}) => {
    const context = useForm();
    const {handleSubmit} = context;
    return (
        <FormProvider {...context}>
            <form onSubmit={handleSubmit(onSubmit,onFailed)}>
                <div className={className}>
                {children}
                </div>
            </form>
        </FormProvider>
    )
}
export default Form
