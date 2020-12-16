import {FC, Fragment} from 'react'
import classList from '../../utils/classList'
type Props = {
    className?: any;
}
const Footer: FC<Props> = ({ className, children }) => {
    const baseStyles = "flex bg-blue-800 text-indigo-100 text-xs justify-center items-center h-10 border-0"
    return (
    <>
        <div className={classList(baseStyles, className)}>
        <p className="clearfix px-5">
            <span className="float-md-left d-block d-md-inline-block">
                Copyright  &copy; 2020
                <a className="text-bold-800 darken-2" href="http://www.payk12.com/" target="_blank">CampusX</a>
                , All rights reserved.
                </span>
        </p>
        </div>
      </>
    )
}
export default Footer