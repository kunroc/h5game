<template>
  <div class="mobile-home">
    <van-nav-bar title="移动端首页 - rem适配" />
    
    <div class="content">
      <!-- rem适配演示卡片 -->
      <div class="demo-card">
        <h3 class="text-lg">rem适配演示</h3>
        <p class="text-sm">当前根字体大小: {{ rootFontSize }}px</p>
        <p class="text-sm">屏幕宽度: {{ screenWidth }}px</p>
        <p class="text-xs">所有尺寸使用rem单位，自动适配不同屏幕</p>
      </div>
      
      <van-card
        num="2"
        price="2.00"
        desc="使用rem单位的商品卡片"
        title="rem适配商品"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
        class="product-card"
      />
      
      <van-grid :column-num="2" class="grid">
        <van-grid-item icon="photo-o" text="1rem" />
        <van-grid-item icon="photo-o" text="0.875rem" />
        <van-grid-item icon="photo-o" text="1.125rem" />
        <van-grid-item icon="photo-o" text="1.25rem" />
      </van-grid>
      
      <van-cell-group class="cell-group">
        <van-cell title="字体大小" value="1rem (16px基准)" />
        <van-cell title="间距" value="使用rem工具类" label="p-4 = 1rem = 16px" />
        <van-cell title="响应式" value="根据屏幕动态调整" label="移动端和PC端统一适配" />
      </van-cell-group>
      
      <div class="button-group">
        <van-button type="primary" size="large" class="demo-button">主要按钮 (rem)</van-button>
        <van-button type="success" size="large" class="demo-button">成功按钮 (rem)</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { getCurrentRootFontSize } from '@/utils/rem'

// 响应式数据
const rootFontSize = ref(16)
const screenWidth = ref(0)

// 更新显示信息
const updateInfo = () => {
  rootFontSize.value = Math.round(getCurrentRootFontSize())
  screenWidth.value = window.innerWidth
}

// 监听窗口变化
const handleResize = () => {
  updateInfo()
}

onMounted(() => {
  updateInfo()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.mobile-home {
  background-color: #f7f8fa;
  min-height: 100vh;
}

.content {
  padding: 1rem; /* 16px */
}

.demo-card {
  background: white;
  border-radius: 0.5rem; /* 8px */
  padding: 1rem; /* 16px */
  margin-bottom: 1rem; /* 16px */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* 2px 4px */
}

.demo-card h3 {
  margin-bottom: 0.5rem; /* 8px */
  color: #1989fa;
}

.demo-card p {
  margin-bottom: 0.25rem; /* 4px */
  color: #666;
}

.product-card {
  margin-bottom: 1rem; /* 16px */
}

.grid {
  margin-bottom: 1rem; /* 16px */
}

.cell-group {
  margin-bottom: 1rem; /* 16px */
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 12px */
  padding: 1rem 0; /* 16px */
}

.demo-button {
  height: 2.75rem; /* 44px */
  font-size: 1rem; /* 16px */
}
</style>