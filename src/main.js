import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
const app = createApp(App)
app.use(router).mount('#app')
app.use(Antd)
