import Auth from '../pages/auth/Index';
import Register from '../pages/auth/Register';
import StudentIndex from '../pages/students/Index';
import StudentProfile from '../pages/students/Profile';


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/auth/',
    component: () => import('../layouts/Auth'),
    children: [
      { path: 'login', component: Auth, meta:{name:'auth'} },
      { path: '/register', component: Register, meta:{name:'Register'} },
      // { path: '/forgot-password', component: () => import('../pages/auth/ForgotPass') },
      // { path: '/forgot-password', component: () => import('../pages/ForgotPass') },
    ]
  },

  {
    path: '/student/',
    component: () => import('../layouts/StudentLayout'),
    children: [
      { path: 'home', component: StudentIndex, meta:{name:'Dashboard'} },
      { path: 'profile', component: StudentProfile, meta:{name:'Profile'} },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
