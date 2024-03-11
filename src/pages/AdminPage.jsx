import React from 'react'
import SideBar from '../components/SIdeBar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../components/DashBoard'
import Employees from '../components/Employees'
import MyDocuments from '../components/MyDocuments'
import MyCataLog from '../components/MyCataLog'
import SellingInquiry from '../components/SellingInquiry'
import BuyingInquiry from '../components/BuyingInquiry'

const AdminPage = () => {
  return (
    <div className='flex'>       

      <SideBar/>
   

     <div className="w-full">
     <Routes>
          <Route path="" element={<DashBoard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="documents" element={<MyDocuments />} />
          <Route path="catalog" element={<MyCataLog />} />
          <Route path='selling-inquiry' element={<SellingInquiry/>}/>
          <Route path='buying-inquiry' element={<BuyingInquiry/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default AdminPage



