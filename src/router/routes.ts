import type { RouteRecordRaw } from 'vue-router'
import { getDeviceType } from '@/utils/device'

/**
 * 动态路由配置
 * 根据设备类型加载对应的页面组件
 */

/**
 * 创建设备特定的组件加载器
 * @param componentName 组件名称
 */
function createDeviceComponentLoader(componentName: string) {
  return () => {
    const deviceType = getDeviceType()
    
    // 根据设备类型和组件名称进行精确的动态导入
    const devicePath = (deviceType === 'mobile' || deviceType === 'tablet') ? 'mobile' : 'desktop'
    
    // 添加路由组件加载的调试信息
    console.log(`🚀 加载组件: ${componentName}, 设备类型: ${deviceType}, 路径: ${devicePath}`)
    
    // 使用函数式的动态导入，确保在生产环境中正确工作
    const loadComponent = async () => {
      try {
        if (devicePath === 'mobile') {
          // 移动端组件导入
          switch (componentName) {
            case 'HomeView':
              return await import('@/views/mobile/HomeView.vue')
            default:
              throw new Error(`Unknown mobile component: ${componentName}`)
          }
        } else {
          // 桌面端组件导入
          switch (componentName) {
            case 'HomeView':
              return await import('@/views/desktop/HomeView.vue')
            default:
              throw new Error(`Unknown desktop component: ${componentName}`)
          }
        }
      } catch (error) {
        console.error(`Failed to load component: ${componentName} for device: ${devicePath}`, error)
        // 如果加载失败，返回首页
        return await import('@/views/desktop/HomeView.vue')
      }
    }
    
    return loadComponent()
  }
}

/**
 * 基础路由配置
 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: createDeviceComponentLoader('HomeView'),
    meta: {
      title: '首页',
      keepAlive: true
    }
  }
]

/**
 * 移动端专用路由
 */
export const mobileOnlyRoutes: RouteRecordRaw[] = [
  // 移动端专用路由（暂时注释，可根据需要添加）
  // {
  //   path: '/mobile-exclusive',
  //   name: 'MobileExclusive',
  //   component: () => import(/* webpackChunkName: "mobile-exclusive" */ '@/views/mobile/ExclusiveView.vue'),
  //   meta: {
  //     title: '移动端专属',
  //     deviceType: 'mobile'
  //   }
  // }
]

/**
 * PC端专用路由
 */
export const desktopOnlyRoutes: RouteRecordRaw[] = [
  // PC端专用路由（暂时注释，可根据需要添加）
  // {
  //   path: '/desktop-exclusive',
  //   name: 'DesktopExclusive',
  //   component: () => import(/* webpackChunkName: "desktop-exclusive" */ '@/views/desktop/ExclusiveView.vue'),
  //   meta: {
  //     title: 'PC端专属',
  //     deviceType: 'desktop'
  //   }
  // }
]

/**
 * 错误页面路由
 */
export const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

/**
 * 获取设备特定的路由配置
 */
export function getDeviceSpecificRoutes(): RouteRecordRaw[] {
  const deviceType = getDeviceType()
  let deviceRoutes: RouteRecordRaw[] = []
  
  // 移动端和平板都使用移动端路由
  if (deviceType === 'mobile' || deviceType === 'tablet') {
    deviceRoutes = mobileOnlyRoutes
  } else {
    deviceRoutes = desktopOnlyRoutes
  }
  
  return [...routes, ...deviceRoutes, ...errorRoutes]
}

/**
 * 路由元信息类型定义
 */
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    keepAlive?: boolean
    requiresAuth?: boolean
    deviceType?: 'mobile' | 'desktop'
    icon?: string
    hidden?: boolean
  }
}