import {FC, Fragment} from 'react'
import Link from 'next/link'
type MenuItemProps = {
    text: string;
    route: string;
    icon: string;
}

const MenuItem: FC<MenuItemProps> = ({icon, text, route}) => {
    return (
        <Link href={route}>
        <a href="#" className="bg-indigo-800 text-white group flex flex-col items-center px-2 py-2 text-sm font-medium rounded-md">
            <img className="h-8 w-8 text-indigo-300" src={`/svg/icons/menu-${icon}.svg`} alt="Schools" />
            <span>{text}</span>
        </a>
        </Link>
    )
}
const SideMenu: FC<{}> = ({ children }) => {
    return (
    <div className="bg-gradient-to-r from-purple-700 via-blue-800 via-indigo-800 to-blue-600 flex flex-shrink-0">
        <div className="flex flex-col w-32">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="h-16 w-auto" src="/svg/logos/campusx.svg" alt="CampusX" />
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                <MenuItem text="dashboard" icon="reports" route="/dashboard" />
                <MenuItem text="schools" icon="schools" route="/schools" />
                <MenuItem text="services" icon="services" route="/services" />
                <MenuItem text="stores" icon="stores" route="/stores" />
                <MenuItem text="events" icon="events" route="/events" />
                <MenuItem text="students" icon="students" route="/students" />
                <MenuItem text="users" icon="users" route="/users" />
                <MenuItem text="settings" icon="settings" route="/settings" />
                <MenuItem text="help" icon="help" route="/help" />
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
}
export default SideMenu