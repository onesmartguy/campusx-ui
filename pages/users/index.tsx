import Head from 'next/head'
import Link from 'next/link'
import {AdminLayout} from '../../components/layouts/AdminLayout'

export default function Home() {
  return (
    <AdminLayout>
      <h1>Users</h1>
    </AdminLayout>
  )
}
