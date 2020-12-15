import Head from 'next/head'
import Link from 'next/link'
import {AdminLayout} from '../../components/layouts/AdminLayout'

export default function Home() {
  return (
    <AdminLayout title={'Services'}>
    <div className="pre-loader"></div>
    <div className="app-content content">
        <div className="content-wrapper">
            <div className="content-header row p-0">
                <div className="loginNavbar">
                    <div>NEED HELP?</div>
                    <div>FIND YOUR SCHOOL</div>
                    <div>SUPPORT</div>
                </div>
            </div>
            <div className="content-body">
               <h2>SErvice Landing</h2>   
               <Link href="/services/create">
          <a>Create Service</a>
        </Link>       
            </div>
        </div>
    </div>
    <a href="#" id="overviewLink" className="d-none"></a>

    
    </AdminLayout>
  )
}
