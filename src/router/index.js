import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import JobsView from "../views/Jobs/JobsView.vue"
import JobsDetail from "../views/Jobs/JobsDetail.vue"
import NotFound from "../views/NotFound.vue"



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetail',
    component: JobsDetail,
    props:true
  },
  //Redirect
  {
    path:'/all-jobs',
    redirect:'Jobs'
  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
