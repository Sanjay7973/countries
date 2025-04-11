import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import PaginatedComponent from './component/pagination'
import ManualPagination from './component/pagination'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <ManualPagination/> */}
      <Footer/>
    </div>
  )
}

export default Layout
