import { createRouter, createWebHistory } from 'vue-router'
import { getDeviceType } from '@/utils/device'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {
        const deviceType = getDeviceType()
        // 根据设备类型动态加载对应的组件
        if (deviceType === 'mobile') {
          return import('@/views/mobile/HomeView.vue')
        } else {
          return import('@/views/desktop/HomeView.vue')
        }
      },
      meta: {
        title: '首页'
      }
    }
    // 可以在这里添加更多路由
  ],
})

export default router
