import Vue from 'vue'
import Router from 'vue-router'

import ProtectedApp from '@src/components/ProtectedApp'
import DashboardPage from '@src/components/pages/DashboardPage'

Vue.use(Router)

export const routes = [
  { path: '/', component: ProtectedApp, children: [
    { path: '', name: 'Dashboard', component: DashboardPage }
  ]},
  { path: '**', redirect: {name: 'Landing'} }
]

export default new Router({
  mode: 'history',
  routes: routes
})
