import Auth from '../pages/auth/Index';
import Register from '../pages/auth/Register';
import StudentIndex from '../pages/students/Index';
import StudentProfile from '../pages/students/Profile';
import Timetable from "pages/students/Timetable";
import Subjects from "pages/students/Subjects";
import Attendance from "pages/students/Attendance";
import Exam from "pages/students/Exam";
import Teachers from "pages/students/Teachers";
import Notice from "pages/students/Notice";


const routes = [
  {
    path: '/',
    component: () => import('../layouts/StudentLayout'),
    children: [
      { path: '', component: StudentIndex, meta:{name:'Dashboard'} },

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
      { path: 'timetable', component: Timetable, meta:{name:'Timetable'} },
      { path: 'subjects', component: Subjects, meta:{name:'Subjects'} },
      { path: 'attendance', component: Attendance, meta:{name:'Attendance'} },
      { path: 'exam', component: Exam, meta:{name:'Exam Result'} },
      { path: 'teachers', component: Teachers, meta:{name:'Teachers'} },
      { path: 'notice', component: Notice, meta:{name:'Notice'} },
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
