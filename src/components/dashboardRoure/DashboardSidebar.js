import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSidebar = ({children}) => {
  return (
    <div class="drawer drawer-mobile bg-green-300">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
       {children}
    </div>
    <div class="drawer-side ">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-48 bg-green-400 text-base-content">
        <li><Link to='/dashboard/addAdmin'>Add Admin</Link></li>
        <li><Link to='/dashboard/addService'>Add Service</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default DashboardSidebar