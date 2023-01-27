import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Login from '../views/Login'
import Welcome from '../views/Welcome'
import Dashboard from '../views/Dashboard'
import Nav from '../views/Dashboard/Nav'
import NotFound from '../components/NotFound'
import Axios from '../views/Dashboard/Axios'
import Detail1 from '../views/Dashboard/Nav/Detail1'
import Detail2 from '../views/Dashboard/Nav/Detail2'
import Detail3 from '../views/Dashboard/Nav/Detail3'
import Count from '../views/Dashboard/Count'


const rootRouter = [
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path: "/login",
        element: <Login />,
        meta: {
            requiresAuth: false,
            title: "登录页",
            key: "login"
        }
    },
    {
        path: "/welcome",
        element: <Welcome />,
        meta: {
            requiresAuth: false,
            title: "欢迎页",
            key: "welcome"
        }
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard/nav",
                element: <Nav />,
                meta: {
                    requiresAuth: true,
                    title: "校验 Form",
                    key: "validateForm"
                },
                children: [
                    {
                        path: "/dashboard/nav/detail1",
                        element: <Detail1 />,
                        meta: {
                            requiresAuth: true,
                            title: "校验 Form",
                            key: "validateForm"
                        }
                    },
                    {
                        path: "/dashboard/nav/detail2",
                        element: <Detail2 />,
                        meta: {
                            requiresAuth: true,
                            title: "校验 Form",
                            key: "validateForm"
                        }
                    },
                    {
                        path: "/dashboard/nav/detail3",
                        element: <Detail3 />,
                        meta: {
                            requiresAuth: true,
                            title: "校验 Form",
                            key: "validateForm"
                        }
                    },
                ],
            },
            {
                path: "/dashboard/axios",
                element: <Axios />,
                meta: {
                    requiresAuth: true,
                    title: "校验 Form",
                    key: "validateForm"
                }
            },
            {
                path: "/dashboard/count",
                element: <Count />,
                meta: {
                    requiresAuth: true,
                    title: "校验 Form",
                    key: "validateForm"
                }
            }
        ],
        meta: {
            requiresAuth: false,
            title: "工作台",
            key: "dashboard"
        },
    },
    {
        path: "*",
        element: <NotFound />
    }
]

const Router = () => {
    const routes = useRoutes(rootRouter)
    return routes
}
export default Router