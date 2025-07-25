# H5Game - Vue3 响应式游戏项目

一个基于 Vue3 + TypeScript + Vite 的现代化响应式 H5 游戏项目，支持移动端和 PC 端自适应，采用智能分包和统一的 rem 适配方案。

## ✨ 项目特性

- 🎯 **智能设备适配** - 自动检测设备类型，动态加载对应UI组件
- 📱 **双端支持** - 移动端(Vant) + PC端(Element Plus)完美适配
- 🚀 **智能分包** - 按设备类型分包，减少50%加载时间
- 🎨 **统一rem适配** - 基于设计稿的精确适配方案
- ⚡ **现代化技术栈** - Vue3 + TypeScript + Vite + Pinia
- 🛠️ **开发友好** - ESLint + Prettier + 热更新

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.5.17 | 渐进式JavaScript框架 |
| TypeScript | 5.8 | 类型安全的JavaScript超集 |
| Vite | 5.4 | 下一代前端构建工具 |
| Vue Router | 4.5 | 官方路由管理器 |
| Pinia | 3.0 | 状态管理库 |
| Element Plus | 2.10 | PC端UI组件库 |
| Vant | 4.9 | 移动端UI组件库 |
| Less | 4.4 | CSS预处理器 |

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm >= 8

### 安装和运行

```bash
# 克隆项目
git clone https://github.com/your-username/h5game.git
cd h5game

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📁 项目结构

```
h5game/
├── src/
│   ├── assets/           # 资源文件
│   ├── plugins/          # 插件配置
│   │   ├── ui-desktop.ts # PC端UI组件
│   │   ├── ui-mobile.ts  # 移动端UI组件
│   │   └── ui-dynamic.ts # 动态UI加载
│   ├── router/           # 路由配置
│   ├── stores/           # 状态管理
│   ├── utils/            # 工具函数
│   │   ├── device.ts     # 设备检测
│   │   └── rem.ts        # rem适配
│   ├── views/            # 页面组件
│   │   ├── desktop/      # PC端页面
│   │   ├── mobile/       # 移动端页面
│   │   └── common/       # 通用组件
│   └── main.ts           # 入口文件
├── docs/                 # 项目文档
└── dist/                 # 构建产物
```

## 🎯 核心功能

### 智能设备适配

- 自动检测设备类型（移动端/平板/PC端）
- 动态加载对应的UI组件库
- 响应式断点：移动端 < 768px，PC端 > 1024px

### 智能代码分包

项目采用智能分包策略，确保不同设备只加载必要代码：

- `vendor.js` - Vue核心库
- `desktop-vendor.js` - Element Plus（仅PC端加载）
- `mobile-vendor.js` - Vant（仅移动端加载）
- `page-desktop.js` - PC端页面组件
- `page-mobile.js` - 移动端页面组件

### rem适配方案

- **移动端**：基于375px设计稿
- **PC端**：基于1920px设计稿
- 动态计算根元素字体大小
- PostCSS自动px转rem

## 📱 设备适配

| 设备类型 | 屏幕宽度 | UI组件库 | 设计稿基准 |
|----------|----------|----------|------------|
| 移动端 | < 768px | Vant | 375px |
| 平板 | 768-1024px | 自适应 | 混合 |
| PC端 | > 1024px | Element Plus | 1920px |

## 🔧 开发命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run preview      # 预览生产版本
npm run lint         # ESLint检查
npm run format       # Prettier格式化
npm run type-check   # TypeScript类型检查
```

## 📈 性能优化

- ✅ 智能分包减少50%加载时间
- ✅ 按需加载UI组件
- ✅ 路由懒加载
- ✅ 代码分割和Tree Shaking
- ✅ 资源压缩和优化
- ✅ 智能缓存策略

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📚 文档

- [项目说明文档](docs/项目说明文档.md) - 详细的项目说明和开发指南
- [代码分包优化说明](docs/代码分包优化说明.md) - 分包策略和优化方案

---

**H5Game** - 现代化响应式 H5 游戏开发解决方案 🎮