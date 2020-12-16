import { FC } from 'react'
import SiteLayout from '../components/layouts/SiteLayout'
import Button from '../components/Button'
import { login } from '../services/AuthServices'
import { DataColumn, DataTable } from 'components/DataTable'
const HomePage = () => {
    const data = [
      {
        color: "red",
        value: "#f00"
      },
      {
        color: "green",
        value: "#0f0"
      },
      {
        color: "blue",
        value: "#00f"
      },
      {
        color: "cyan",
        value: "#0ff"
      },
      {
        color: "magenta",
        value: "#f0f"
      },
      {
        color: "yellow",
        value: "#ff0"
      },
      {
        color: "black",
        value: "#000"
      }
    ]
    const handleLogin = async () => {
        const response = await login('eddie.flores@quisitive.com', 'password1!')
    }
    return (
        <SiteLayout>
           <DataTable items={data}>
             <DataColumn name={"color"}/>
           </DataTable>
        </SiteLayout>
    )
}
export default HomePage;
