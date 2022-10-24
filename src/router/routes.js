const routes = [
  {
    path: '/toutiao',
    name: 'toutiao',
    component: () =>
      import(/* webpackChunkName: "toutiao" */ '@/pages/toutiao/TouHome.vue')
  },
  {
    path: '/ttlist',
    name: 'ttlist',
    component: () =>
      import(/* webpackChunkName: "toutiao" */ '@/pages/toutiao/TouList.vue')
  }
]
export default routes
