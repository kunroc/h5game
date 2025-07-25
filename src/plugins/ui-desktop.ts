import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

/**
 * PC端UI组件配置
 * 仅包含Element Plus相关组件和样式
 */
export async function setupDesktopUI(app: App) {
  try {
    // 配置Element Plus
    app.use(ElementPlus, {
      locale: zhCn,
      size: 'default',
      zIndex: 3000,
    })

    // 设置全局标识
    ;(window as unknown as { ElementPlus: typeof ElementPlus }).ElementPlus = ElementPlus
    
    console.log('🖥️ Element Plus组件库已加载')
  } catch (error) {
    console.error('❌ PC端UI组件加载失败:', error)
    throw error
  }
}

/**
 * PC端特有的组件配置
 */
export const desktopUIConfig = {
  name: 'Element Plus',
  version: ElementPlus.version || 'unknown',
  components: [
    'ElButton',
    'ElCard',
    'ElForm',
    'ElInput',
    'ElTable',
    'ElDialog',
    'ElMenu',
    'ElDropdown',
    'ElPagination',
    'ElDatePicker',
    'ElSelect',
    'ElCheckbox',
    'ElRadio',
    'ElSwitch',
    'ElSlider',
    'ElRate',
    'ElColorPicker',
    'ElTransfer',
    'ElTree',
    'ElCascader',
    'ElTimePicker',
    'ElTimeSelect',
    'ElUpload',
    'ElProgress',
    'ElBadge',
    'ElAlert',
    'ElLoading',
    'ElMessage',
    'ElMessageBox',
    'ElNotification',
    'ElDrawer',
    'ElPopover',
    'ElTooltip',
    'ElPopconfirm',
    'ElCarousel',
    'ElCollapse',
    'ElTimeline',
    'ElDivider',
    'ElCalendar',
    'ElImage',
    'ElBacktop',
    'ElInfiniteScroll',
    'ElAvatar',
    'ElEmpty',
    'ElDescriptions',
    'ElResult',
    'ElSkeleton',
    'ElBreadcrumb',
    'ElPageHeader',
    'ElTabs',
    'ElTag',
    'ElAffix',
    'ElAnchor',
    'ElConfigProvider'
  ]
}