import VueRouter from "vue-router";

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { title: 'home' },
            children: [
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: 'message' },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            meta: { title: 'detail' },
                        },
                    ]
                },
                {
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: 'news' }
                },
            ]
        },
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: { title: 'about' },
        },
    ]
})

//前置守卫
router.beforeEach((to, form, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'jiao') {
            next()
        } else {
            alert('没有权限')
        }
    } else {
        next()
    }
})

//后置守卫
router.afterEach((to, form) => {
    document.title = to.meta.title
})

export default router