import { createRouter, createWebHistory } from 'vue-router'
import { getDeviceSpecificRoutes } from './routes'
import { getDeviceType } from '@/utils/device'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: getDeviceSpecificRoutes()
})

// 全局前置守卫
router.beforeEach((to, _from, next) => {
  // 设置页面标题
  if (to.meta?.title) {
    document.title = `${to.meta.title} - H5游戏平台`
  }
  
  // 检查设备类型限制
  const deviceType = getDeviceType()
  if (to.meta?.deviceType && to.meta.deviceType !== deviceType) {
    console.warn(`路由 ${to.path} 仅支持 ${to.meta.deviceType} 设备访问`)
    next('/')
    return
  }
  
  // 检查认证要求
  if (to.meta?.requiresAuth) {
    // 这里可以添加认证逻辑
    console.log('需要认证的路由:', to.path)
  }
  
  next()
})

// 全局后置钩子
router.afterEach((to) => {
  console.log(`路由跳转完成: ${to.path} (${getDeviceType()}端)`)
})

export default router
