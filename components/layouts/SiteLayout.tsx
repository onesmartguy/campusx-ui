import { FC, Fragment } from 'react'
import Head from "next/head";
import Footer from '../shared/Footer'
export const AdminLayout: FC<{title?: string}> = ({ children, title }) => (
    <Fragment>
        <Head>
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Quicksand:300,400,500,700" /> */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Gibson+Regular:300,300i,400,400i,600,600i,700,700i|Quicksand:300,400,500,700" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="../pages/assets/icons/fontawesome-pro/css/all.css" />
            <link rel="stylesheet" type="text/css" href="../pages/assets/icons/fontawesome-pro/css/fontawesome.css" />
            <link href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
                rel="stylesheet" />

            {/* <!--@*bootstrap styles*@--> */}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>

        </Head>

        <div className="pre-loader"></div>
        <div className="flex flex-col min-h-screen">
            <div className="bg-indigo-700 flex flex-1 flex-shrink-0">
                <main className="flex-1 bg-white relative overflow-y-auto focus:outline-none" tabIndex={0}>
                    {children}
                </main>
            </div>
            <Footer className={'mt-4'} />
        </div>
    </Fragment>
);

export default AdminLayout;
