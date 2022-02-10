import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 安装 @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 别名配置
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 设置打包路径
  base: './',
  server: {
    port: 12138, // 服务运行端口
    open: true, // 服务启动时自动打开
    cors: true // 允许跨域
    // proxy: {} // 代理配置
  }
})
