import React from 'react'

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile bg-green-300">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side ">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-green-400 text-base-content">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Dashboard