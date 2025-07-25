import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'public',
  plugins: [
    vue(),
    vueDevTools(),
    visualizer({
      open: false, // 构建后自动打开报告
      json: true,
      filename: './dist/buildreport.json', // 报告文件名
      gzipSize: true, // 显示 gzip 大小
      brotliSize: true, // 显示 brotli 大小
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    postcss: './postcss.config.js',
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        // 代码分包配置 - 确保page-desktop和page-mobile完全独立
        manualChunks: (id) => {
          // 基础框架依赖包 - 只包含核心框架
          if (id.includes('node_modules')) {
            // Element Plus 完全独立到 desktop
            if (id.includes('element-plus')) {
              return 'desktop-vendor';
            }
            // Vant 完全独立到 mobile
            if (id.includes('vant')) {
              return 'mobile-vendor';
            }
            // 其他第三方库根据使用情况分配
            return 'vendor';
          }
          // 桌面端相关文件 - 包含所有桌面端依赖
          if (id.includes('src/views/desktop') || id.includes('src/plugins/ui-desktop')) {
            return 'page-desktop';
          }
          // 移动端相关文件 - 包含所有移动端依赖
          if (id.includes('src/views/mobile') || id.includes('src/plugins/ui-mobile')) {
            return 'page-mobile';
          }
          // 其他文件默认分配到主包
          return 'index';
        },
      }
    }
  }
})
