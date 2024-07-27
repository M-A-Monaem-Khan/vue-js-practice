import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginPage from '../views/Login/LoginPage.vue'
import DefaultLayout from '../views/Default-View/DefaultLayout.vue'
import AppView from '../views/Default-View/AppView.vue'
import MeetingData from '../views/Forms/MeetingData.vue'
const routes = [

  {
    path: '/',
    component: AppView,
    children: [
      {
        path: '',
        name: 'LoginPage',
        component: LoginPage
      }
    ]
  },
  {
    path: '/BU',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView
      },
      {
        path: 'About',
        name: 'AboutView',
        component: AboutView
      },
      {
        path:'Meeting-Record',
        name:'MeetingData',
        component:MeetingData
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
