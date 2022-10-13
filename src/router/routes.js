const routes = [
  {
    path: '/toutiao',
    name: 'toutiao',
    component: () =>
      import(/* webpackChunkName: "toutiao" */ '@/pages/toutiao/TouHome.vue')
  }
]
export default routes
