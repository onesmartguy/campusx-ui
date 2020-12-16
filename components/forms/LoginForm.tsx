import { FC } from 'react'
import Form from '../Form'
import FormField from '../FormField'
import Button from '../Button'
import classList from 'utils/classList'
type Props = {
    className?: string
}
const LoginForm: FC<{}> = ({ children }) => {

    return (
        <Form onSubmit={(data) => {console.log(data)}} className="grid grid-cols-6 gap-6" >
            <FormField name="username" description="User" type="text" className="col-span-6" />
            <FormField name="password" description="Password" type="password" className="col-span-6" />
            <Button type={"submit"} className="col-span-6">SIGN IN</Button>
        </Form>
    )
}
export default LoginForm

{/* 
    <fieldset className="form-group position-relative has-icon-left">
<input type="email" className="form-control input-lg" id="username" placeholder="School Email Address" tabIndex={1} required data-validation-required-message="Please enter your email address." />
<div className="help-block font-small-3"></div>
</fieldset>
<fieldset className="form-group position-relative has-icon-left">
<input type="password" className="form-control input-lg" id="password" placeholder="Password" tabIndex={2} required data-validation-required-message="Please enter valid passwords." />
<div className="help-block font-small-3"></div>
</fieldset>
<div className="alert alert-block alert-warning cAlert fade in m-0 p-0">
<div className="p-2">
    <button type="button" className="close" data-dismiss="alert">×</button>
    <strong><span className="MyMessage"></span></strong>
</div>
</div>

<Button onClick={handleLogin}>SIGN IN</Button>
<div className="form-group row mt-5">
<div className="col-md-12 col-12 text-center">
    <a href="recover-password.html" className="card-link">Forgot Password?</a>
</div>
</div> 
*/}