import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'
import { setupUI } from './plugins/ui-dynamic'
import './assets/styles/main.less'

// rem适配
import { initRemAdaptation } from './utils/rem'
// 设备类型变化监听
import { watchDeviceTypeChange } from './utils/device'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 异步设置UI组件（动态加载）
setupUI(app).then(() => {
  // 初始化rem适配
  initRemAdaptation()
  
  // 初始化设备类型变化监听
  watchDeviceTypeChange()
  
  app.mount('#app')
}).catch(error => {
  console.error('UI组件初始化失败:', error)
})
