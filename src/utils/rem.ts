/**
 * rem适配工具函数
 * 通过设置html根元素字体大小实现PC和移动端统一适配
 */

import { getDeviceType } from './device'

// 设计稿基准
const DESIGN_WIDTH = {
  mobile: 375, // 移动端设计稿宽度
  desktop: 1920 // PC端设计稿宽度
}

// 基准字体大小
const BASE_FONT_SIZE = {
  mobile: 16, // 移动端基准字体大小
  desktop: 16 // PC端基准字体大小
}

/**
 * 设置根元素字体大小
 */
export function setRootFontSize(): void {
  const deviceType = getDeviceType()
  const clientWidth = document.documentElement.clientWidth || window.innerWidth
  
  let fontSize: number
  
  if (deviceType === 'mobile') {
    // 移动端：根据屏幕宽度动态计算
    fontSize = (clientWidth / DESIGN_WIDTH.mobile) * BASE_FONT_SIZE.mobile
    // 限制字体大小范围
    fontSize = Math.max(12, Math.min(fontSize, 24))
  } else {
    // PC端：根据屏幕宽度动态计算，但有最小和最大限制
    fontSize = (clientWidth / DESIGN_WIDTH.desktop) * BASE_FONT_SIZE.desktop
    // PC端字体大小限制
    fontSize = Math.max(14, Math.min(fontSize, 20))
  }
  
  document.documentElement.style.fontSize = fontSize + 'px'
}

/**
 * 初始化rem适配
 */
export function initRemAdaptation(): void {
  // 设置初始字体大小
  setRootFontSize()
  
  // 监听窗口大小变化
  window.addEventListener('resize', () => {
    setRootFontSize()
  })
  
  // 监听设备方向变化（移动端）
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      setRootFontSize()
    }, 100)
  })
}

/**
 * px转rem工具函数
 * @param px 像素值
 * @param base 基准字体大小，默认16
 * @returns rem值
 */
export function pxToRem(px: number, base: number = 16): string {
  return (px / base) + 'rem'
}

/**
 * rem转px工具函数
 * @param rem rem值
 * @param base 基准字体大小，默认16
 * @returns 像素值
 */
export function remToPx(rem: number, base: number = 16): number {
  return rem * base
}

/**
 * 获取当前根元素字体大小
 * @returns 当前字体大小（px）
 */
export function getCurrentRootFontSize(): number {
  return parseFloat(getComputedStyle(document.documentElement).fontSize)
}

/**
 * 根据设备类型获取推荐的基准字体大小
 * @returns 基准字体大小
 */
export function getBaseFontSize(): number {
  const deviceType = getDeviceType()
  return BASE_FONT_SIZE[deviceType] || BASE_FONT_SIZE.desktop
}