import { FC } from 'react'
import SiteLayout from '../components/layouts/SiteLayout'
import Button from '../components/Button'

import LoginForm from '../components/forms/LoginForm'
import { login } from '../services/AuthServices'
const LoginPage = () => {
    const handleLogin = async () => {
        const response = await login('eddie.flores@quisitive.com', 'password1!')
    }
    return (
        <SiteLayout>
            <div className="flex items-center flex-col">
                <div className="flex text-base uppercase w-1/2 justify-between pt-10 whitespace-nowrap">
                    <div className="px-8">NEED HELP?</div>
                    <div className="px-8">FIND YOUR SCHOOL</div>
                    <div className="px-8">SUPPORT</div>
                </div>
                <div className="flex w-2/3 justify-evenly pt-10">
                    <div className="flex-1">
                        <div className="px-4 py-5">
                            <div className="card-title pb-4">
                                <img src="/img/logo-Campusx-01.png" alt="CampusX" />
                            </div>
                            <div className="card-body">
                                <p className='activateSubHeader'>CONNECTING YOU TO POSSIBILITIES</p>
                                <p className='activateContent'>Access all campus services from one place</p>
                                <Button>
                                    ACTIVATE YOUR ACCOUNT
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black" style={{width: '1px'}}></div>
                    <div className="flex-1 flex justify-center">
                        <div className="px-4 py-5">
                            <LoginForm className="form-horizontal" />
                        </div>
                    </div>
                </div>
                <div className="card-footer border-0 d-none pt-10">
                    <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                        <span>Don't have an account yet?</span>
                    </p>
                    <a href="register.html" className="btn btn-outline-info btn-block mt-2"><i className="ft-user"></i> Register</a>
                </div>
                <div className="d-none" id="yourBrowser"></div>
            </div>
        </SiteLayout>
    )
}
export default LoginPage
