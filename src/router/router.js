import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Blog from '../components/Blog.vue'
import rightSidebar from '../components/RightSidebar.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/blog',
        name: 'blog',
        components: {
            default: Blog,
            sidebar: rightSidebar
        }
    },
    {
        path: '/blog/category/:name',
        components: {
            default: Blog,
            sidebar: rightSidebar
        },
        name: 'category'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router