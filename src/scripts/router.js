import Vue from 'vue'
import Router from 'vue-router'
// import Shell from '@components/Shell'

// import IdentifyFace from '@components/IdentifyFace'
// import DocumentSelect from '@components/DocumentSelect'
// import IdentifyIdCard from '@components/IdentifyIdCard'
// import IdentifyPassport from '@components/IdentifyPassport'
// import IdentityComplete from '@components/IdentityComplete'
// import VideoConference from '@components/VideoConference'
// import NotSupported from '@components/NotSupported'
import ProtectedApp from '@src/components/ProtectedApp'
import LoginPage from '@src/components/pages/LoginPage'
import DashboardPage from '@src/components/pages/DashboardPage'

Vue.use(Router)

export const routes = [
  { path: '/', name: 'Landing', component: LoginPage },
  { path: '/app', component: ProtectedApp, children: [
    { path: 'dashboard', name: 'Dashboard', component: DashboardPage }
  ]},
  { path: '**', redirect: {name: 'Landing'} }
]

export default new Router({
  mode: 'history',
  routes: routes
})
