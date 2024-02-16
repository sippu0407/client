import React from 'react'

function Header() {
  return (
    <div className='bg-slate-200'>
       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold '>Auth-Project</h1>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li>Profile</li>
            <li>sign/signup</li>
        </ul>
       </div>
    </div>
  )
}

export default Header;
