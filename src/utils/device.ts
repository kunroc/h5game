import { ref, onMounted, onUnmounted } from 'vue'

export const useDevice = () => {
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)
  
  const checkDevice = () => {
    const width = window.innerWidth
    isMobile.value = width < 768
    isTablet.value = width >= 768 && width < 1024
    isDesktop.value = width >= 1024
  }
  
  onMounted(() => {
    checkDevice()
    window.addEventListener('resize', checkDevice)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice)
  })
  
  return {
    isMobile,
    isTablet,
    isDesktop
  }
}

// 获取设备类型
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

// 判断是否为移动设备
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// 监听设备类型变化并重新加载页面
export const watchDeviceTypeChange = () => {
  let currentDeviceType = getDeviceType()
  
  const handleResize = () => {
    const newDeviceType = getDeviceType()
    
    // 如果设备类型发生变化（移动端 <-> PC端），则重新加载页面
    if (currentDeviceType !== newDeviceType) {
      // 添加短暂延迟以避免频繁重载
      setTimeout(() => {
        window.location.reload()
      }, 300)
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  // 返回清理函数
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}