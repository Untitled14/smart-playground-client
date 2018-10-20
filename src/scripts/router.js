import Vue from 'vue'
import Router from 'vue-router'

import ProtectedApp from '@src/components/ProtectedApp'
import DashboardPage from '@src/components/pages/DashboardPage'
import TrainerPage from '@src/components/pages/Trainer/TrainerPage'
import TrainerListPage from '@src/components/pages/Trainer/TrainerListPage'

Vue.use(Router)

export const routes = [
  { path: '/', component: ProtectedApp, children: [
    { path: '', name: 'Dashboard', component: DashboardPage },
    { path: 'trainer/:trainerId?', props: true, component: TrainerPage, children: [
      { path: '', name: 'TrainerItem', component: TrainerListPage },
      { path: 'group', name: 'TrainerGroup', component: TrainerListPage }
    ]}
  ]},
  { path: '**', redirect: {name: 'Landing'} }
]

export default new Router({
  mode: 'history',
  routes: routes,
  linkExactActiveClass: 'active'
})
