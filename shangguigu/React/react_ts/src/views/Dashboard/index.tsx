import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <nav>
                <NavLink to="/dashboard/nav">nav</NavLink> ｜
                <NavLink to="/dashboard/axios">axios</NavLink> ｜
                <NavLink to="/dashboard/count">count</NavLink> ｜
            </nav>
            <Outlet />
        </div>
    )
}
