import { useRouter } from 'next/router'

import {AdminLayout} from '../../components/layouts/AdminLayout'

export default function Home() {
    const router = useRouter()
  return (
    <AdminLayout title={""}>

    </AdminLayout>
  )
}
