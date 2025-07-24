<template>
  <div class="desktop-home">
    <div class="header">
      <h1 class="text-3xl">PC端首页 - rem适配演示</h1>
      <p class="text-lg">统一的rem适配方案，PC和移动端无缝切换</p>
    </div>
    
    <el-row :gutter="20" class="content-row">
      <el-col :span="8">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span class="text-lg">rem适配信息</span>
            </div>
          </template>
          <div class="info-content">
            <p class="text-base">当前根字体大小: <strong>{{ rootFontSize }}px</strong></p>
            <p class="text-base">屏幕宽度: <strong>{{ screenWidth }}px</strong></p>
            <p class="text-sm">设备类型: <strong>{{ deviceType }}</strong></p>
            <p class="text-xs">所有尺寸使用rem单位，自动适配</p>
          </div>
        </el-card>
      </el-col>
      
      <el-col :span="8">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span class="text-lg">表单示例 (rem)</span>
            </div>
          </template>
          <el-form :model="form" label-width="7.5rem" class="demo-form">
            <el-form-item label="用户名">
              <el-input v-model="form.username" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email" placeholder="请输入邮箱" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="demo-button">提交 (rem)</el-button>
              <el-button class="demo-button">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      
      <el-col :span="8">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span class="text-lg">操作按钮 (rem)</span>
            </div>
          </template>
          <div class="button-group">
            <el-button type="primary" size="large" class="demo-button">主要操作</el-button>
            <el-button type="success" size="large" class="demo-button">成功操作</el-button>
            <el-button type="warning" size="large" class="demo-button">警告操作</el-button>
            <el-button type="danger" size="large" class="demo-button">危险操作</el-button>
          </div>
          <div class="size-demo">
            <p class="text-xs">字体大小演示:</p>
            <p class="text-sm">小号文字 (0.875rem)</p>
            <p class="text-base">正常文字 (1rem)</p>
            <p class="text-lg">大号文字 (1.125rem)</p>
            <p class="text-xl">超大文字 (1.25rem)</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { getCurrentRootFontSize } from '@/utils/rem'
import { isMobileDevice, getDeviceType } from '@/utils/device'

const form = reactive({
  username: '',
  password: '',
  email: ''
})

const rootFontSize = ref(16)
const screenWidth = ref(window.innerWidth)
const deviceType = ref(isMobileDevice() ? '移动端' : 'PC端')

const updateInfo = () => {
  rootFontSize.value = getCurrentRootFontSize()
  screenWidth.value = window.innerWidth
  deviceType.value = getDeviceType() === 'mobile' ? '移动端' : getDeviceType() === 'tablet' ? '平板端' : 'PC端'
}

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

<style scoped lang="less">
@import '@/assets/styles/variables.less';
.desktop-home {
  background-color: @background-color-base;
  min-height: 100vh;
}

.header {
  padding: (@padding-lg + 8px) (@padding-md + 4px); /* 32px 20px */
  text-align: center;
  background: @component-background;
  margin-bottom: (@margin-md + 4px); /* 20px */
  border-radius: (@border-radius-base - 2px); /* 8px */
  box-shadow: @box-shadow-base;
}

.content-row {
  padding: 0 (@padding-md + 4px); /* 20px */
}

.demo-card {
  margin-bottom: (@margin-md + 4px); /* 20px */
  border-radius: (@border-radius-base - 2px); /* 8px */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-content {
  padding: @padding-xs 0; /* 8px */
  
  p {
    margin-bottom: @margin-xs; /* 8px */
    line-height: @line-height-base;
  }
}

.demo-form {
  padding: @padding-xs 0; /* 8px */
}

.demo-button {
  height: 2.5rem; /* 40px */
  padding: 0 (@padding-md + 8px); /* 24px */
  margin-right: @margin-sm; /* 12px */
  font-size: @font-size-sm; /* 14px */
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: @margin-sm; /* 12px */
  margin-bottom: @margin-md; /* 16px */
}

.size-demo {
  padding-top: @padding-md; /* 16px */
  border-top: @border-width-base solid @border-color-split;
  
  p {
    margin-bottom: @margin-xs; /* 8px */
    line-height: 1.4;
  }
}
</style>