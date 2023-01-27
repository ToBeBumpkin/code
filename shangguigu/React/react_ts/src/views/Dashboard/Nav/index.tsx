import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
        <NavLink to="/dashboard/nav/detail1">detail1</NavLink> ｜
        <NavLink to="/dashboard/nav/detail2">detail2</NavLink> ｜
        <NavLink to="/dashboard/nav/detail3">detail3</NavLink> ｜
      </nav>
      <Outlet />
    </div>
  )
}
