import {FC, Fragment} from 'react'
const Footer: FC<{}> = ({ children }) => {
    return (
    <footer>
        <div className="flex bg-blue-900 text-indigo-100 text-xs justify-center items-center h-10 border-0">
        <p className="clearfix px-5">
            <span className="float-md-left d-block d-md-inline-block">
                Copyright  &copy; 2020
                <a className="text-bold-800 darken-2" href="http://www.payk12.com/" target="_blank">CampusX</a>
                , All rights reserved.
                </span>
        </p>
        </div>
      </footer>
    )
}
export default Footer