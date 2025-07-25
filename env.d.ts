/// <reference types="vite/client" />

// Vue组件类型声明
// 用于声明.vue文件的模块类型,使TypeScript可以正确识别Vue组件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

// 自定义模块类型声明
// 设备工具模块
declare module '@/utils/device' {
  // 获取设备类型
  export function getDeviceType(): 'mobile' | 'tablet' | 'desktop'
  // 判断是否为移动设备
  export function isMobileDevice(): boolean
  // 监听设备类型变化
  export function watchDeviceTypeChange(): () => void
  // 设备类型响应式数据
  export function useDevice(): {
    isMobile: import('vue').Ref<boolean>
    isTablet: import('vue').Ref<boolean>
    isDesktop: import('vue').Ref<boolean>
  }
}

// REM工具模块
declare module '@/utils/rem' {
  // 设置根元素字体大小
  export function setRootFontSize(): void
  // 初始化REM适配
  export function initRemAdaptation(): void
  // px转换为rem
  export function pxToRem(px: number, base?: number): string
  // rem转换为px
  export function remToPx(rem: number, base?: number): number
  // 获取当前根元素字体大小
  export function getCurrentRootFontSize(): number
  // 获取基准字体大小
  export function getBaseFontSize(): number
}
