import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import {AdminLayout} from '../../components/layouts/AdminLayout'
import {DataTable, DataColumn} from '../../components/DataTable'
import { getColleges} from '../../services/CollegeServices'
import CreateServiceForm from 'components/forms/CreateServiceForm'

export default function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    getColleges().then(r => {
      if(r.data) setItems(r.data)
    })
  }, [])
  return (
    <AdminLayout>
      <h1>Schools</h1>
      <DataTable items={items}>
             <DataColumn name={"id"}/>
             <DataColumn name={"name"}/>
             <DataColumn name={"isActive"}/>
      </DataTable>
      <CreateServiceForm>
        
      </CreateServiceForm>
    </AdminLayout>
  )
}
