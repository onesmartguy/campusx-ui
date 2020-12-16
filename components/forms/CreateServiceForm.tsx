import { FC } from 'react'
import Form from '../Form'
import FormField from '../FormField'
import Button from '../Button'
import classList from 'utils/classList'
import {DataColumn, DataTable} from 'components/DataTable'
import TextField from 'components/TextField'
type Props = {
    className?: string
}
const CreateServiceForm: FC<{}> = ({ children }) => {
    const users = [
        {name: "user 1", status: 'active', email: "user1@school.com"},
        {name: "user 2", status: 'inactive', email: "user2@school.com"},
    ]
    return (
        <>
        <h2>Setup Information</h2>
        <Form onSubmit={(data) => {console.log(data)}}  >
            <div className="grid grid-cols-6 gap-6">
            <FormField name="name" description="Name" type="text" className="col-span-6" />
            <FormField name="location" description="Campus Location" type="text" className="col-span-6" />
            <FormField name="address" description="Address" type="text" className="col-span-6" />
            <FormField name="city" description="City" type="text" className="col-span-4" />
            <FormField name="state" description="State" type="text" className="col-span-1" />
            <FormField name="zip" description="Zip" type="text" className="col-span-1" />
            </div>
        </Form>
        <h2>Primary Contact</h2>
        <Form onSubmit={(data) => {console.log(data)}}  >
            <div className="grid grid-cols-6 gap-6">
            <FormField name="firstname" description="First Name" type="text" className="col-span-3" />
            <FormField name="lastname" description="Last Name" type="text" className="col-span-3" />
            <FormField name="email" description="Email" type="text" className="col-span-6" />
            <FormField name="phone" description="Phone" type="text" className="col-span-6" />
            <FormField name="title" description="Title" type="text" className="col-span-4" />
            </div>
        </Form>
        <h2>Payment Methods Available</h2>
        <Form onSubmit={(data) => {console.log(data)}}  >
            <div className="grid grid-cols-6 gap-6">
            <FormField name="firstname" description="First Name" type="text" className="col-span-3" />
            <FormField name="lastname" description="Last Name" type="text" className="col-span-3" />
            <FormField name="email" description="Email" type="text" className="col-span-6" />
            <FormField name="phone" description="Phone" type="text" className="col-span-6" />
            <FormField name="title" description="Title" type="text" className="col-span-4" />
            </div>
        </Form>
        
        <h2>Find &amp; Assign Admins</h2>
        <div className="grid grid-cols-6 gap-6">
            <TextField name="usersearch" type="text" className="col-span-6" />
            <Button className="col-start-2 col-span-4">Search</Button>
        </div>
        <DataTable items={users}>
             <DataColumn name={"name"}/>
             <DataColumn name={"status"}/>
             <DataColumn name={"email"}/>
      </DataTable>
    </>
    )
}
export default CreateServiceForm

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