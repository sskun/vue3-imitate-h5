const routes = [
  {
    path: '/tthome',
    name: 'tthome',
    component: () =>
      import(/* webpackChunkName: "tthome" */ '@/pages/toutiao/TouHome.vue')
  },
  {
    path: '/ttlist',
    name: 'ttlist',
    component: () =>
      import(/* webpackChunkName: "ttlist" */ '@/pages/toutiao/TouList.vue')
  }
]
export default routes
