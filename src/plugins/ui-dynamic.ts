import type { App } from 'vue'
import { getDeviceType } from '@/utils/device'

/**
 * 动态UI加载入口
 * 根据设备类型动态加载对应的UI组件库
 */
export async function setupUI(app: App) {
  const deviceType = getDeviceType()
  
  // 添加详细的调试信息
  console.log('🔍 设备检测信息:', {
    deviceType,
    userAgent: navigator.userAgent,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  })

  try {
    // 移动端和平板都使用移动端UI组件
    if (deviceType === 'mobile' || deviceType === 'tablet') {
      // 动态加载移动端UI组件，避免静态分析
      const uiModule = await import(/* @vite-ignore */ '@/plugins/ui-mobile')
      await uiModule.setupMobileUI(app)
      console.log('✅ 移动端UI组件加载完成')
    } else {
      // 动态加载PC端UI组件，避免静态分析
      const uiModule = await import(/* @vite-ignore */ '@/plugins/ui-desktop')
      await uiModule.setupDesktopUI(app)
      console.log('✅ PC端UI组件加载完成')
    }
  } catch (error) {
    console.error('❌ UI组件加载失败:', error)
    throw error
  }
}

/**
 * 获取当前加载的UI类型
 */
export function getCurrentUIType(): 'mobile' | 'desktop' {
  const deviceType = getDeviceType()
  return (deviceType === 'mobile' || deviceType === 'tablet') ? 'mobile' : 'desktop'
}

/**
 * 检查UI是否已加载
 */
export function isUILoaded(): boolean {
  const deviceType = getDeviceType()

  // 移动端和平板都检查Vant
  if (deviceType === 'mobile' || deviceType === 'tablet') {
    // 检查Vant是否已加载
    return !!(window as Window & typeof globalThis & { vant?: unknown }).vant
  } else {
    // 检查Element Plus是否已加载
    return !!(window as Window & typeof globalThis & { ElementPlus?: unknown }).ElementPlus
  }
}
