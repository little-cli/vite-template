import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import { store, key } from './store'
import App from './App.vue'

// element-plus 全局引入
import 'element-plus/dist/index.css' // 样式路径修改

const app = createApp(App) // 创建实例对象

app.use(router).use(ElementPlus).use(store, key).mount('#app')
