import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import useAdmin from '../hooks/useAdmin';

const Navbar = ({children}) => {
  const [dark, setDark] = useState(false)
  const [admin] = useAdmin();
  return (
    <div class="drawer drawer-end fixed top-0" data-theme={dark ? "dark" : "light"}>
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/> 
    <div class="drawer-content flex flex-col">
      <div class="w-full navbar bg-green-400">
        <div class="flex-1 px-2 mx-2">
        <NavLink to='/'>  
        <a className='text-black'>Free Thoughts</a></NavLink>
        </div>
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal pt-2">
          <NavLink to='/'>
            <a className='btn btn-sm  ml-5'>Home</a>
          </NavLink>
          {admin && <NavLink to='/dashboard'>
            <a className='btn btn-sm  ml-5'>Dahboard</a>
          </NavLink>
          }
            <NavLink to='/service'><a className='btn btn-sm   ml-5'>Service</a></NavLink>
            <NavLink to='/about'>
              <a className='btn btn-sm  ml-5'>About</a>
            </NavLink>
            <NavLink to='/login'>
              <a className='btn btn-sm  ml-5'>
                Login
              </a>
            </NavLink>
            <NavLink to='/contact'>
            <a className='btn btn-sm  ml-5'>
              Contact
            </a>
            </NavLink>
            <div class="dropdown dropdown-hover  dropdown-end">
              <label tabindex="0" class="btn btn-sm m-1  btn-primary ml-5 mt-[-2px] bg-gray-200 text-black hover:bg-gray-400">Book Now</label>
              <ul tabindex="0" class="hover:bg-primary hover:text-white hover:cursor-pointer dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
            <label class="swap swap-rotate mt-[-5px]">
              <input onClick={()=>setDark(!dark)} type="checkbox"/>           
              <svg class="swap-on fill-light w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>              
              <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>             
        </label>
          </ul>
        </div>
      </div>
         {children}
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      {admin && 
          <>          
            <label  class="btn btn-circle swap swap-rotate mr-auto mb-5" for="my-drawer-2">
            <input type="checkbox" />
            <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </label>          
          <NavLink to='/dashboard'>
            <a className='btn btn-sm mb-5'>Dahboard</a>
          </NavLink>
          </>
          }
      <NavLink to='/'>
            <a className='btn btn-sm mb-5'>Home</a>
          </NavLink>
            <NavLink to='/service'><a className='btn btn-sm   mb-5'>Service</a></NavLink>
            <NavLink to='/about'>
              <a className='btn btn-sm  mb-5'>About</a>
            </NavLink>
            <NavLink to='/login'>
              <a className='btn btn-sm  mb-5'>
                Login
              </a>
            </NavLink>
            <NavLink to='/contact'>
            <a className='btn btn-sm  mb-5'>
              Contact
            </a>
            </NavLink>
            <div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box"> 
  <div class="collapse-title text-xl font-medium">
   Book Now
  </div>
  <div class="collapse-content"> 
   <h2>Item-1</h2>
   <h2>Item-2</h2>
  </div>
</div>
<label class="swap swap-rotate mr-auto mt-5">
              <input onClick={()=>setDark(!dark)} type="checkbox"/>           
              <svg class="swap-on fill-light w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>              
              <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>             
        </label>
      </ul>
    </div>
  </div>
  )
}

export default Navbar