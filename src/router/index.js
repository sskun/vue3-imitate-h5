// 从vue-router中引入createRouter,createWebHistory createWebHashHistory，以及模式
import { createRouter, createWebHistory } from 'vue-router'
// 引入routes.ts文件
console.log(333)
import routes from './routes.js'
const router = createRouter({
  history: createWebHistory(), //createWebHashHistory是hash模式
  routes
})

export default router
