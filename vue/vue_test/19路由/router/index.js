import VueRouter from "vue-router";

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name:'details',
                            path: 'detail',
                            component: Detail,
                        },
                    ]
                },
                {
                    path: 'news',
                    component: News,
                },
            ]
        },
        {
            path: '/about',
            component: About,
        },
    ]
})