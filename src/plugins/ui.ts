import type { App } from 'vue'
import { getDeviceType } from '@/utils/device'

export const setupUI = async (app: App) => {
  const deviceType = getDeviceType()

  if (deviceType === 'mobile') {
    // 动态导入移动端UI库
    const { Button, Field, Form, Card, Grid, GridItem, NavBar, Tabbar, TabbarItem, Cell, CellGroup } = await import('vant')
    await import('vant/lib/index.css')
    
    // 注册移动端组件
    app.use(Button)
    app.use(Field)
    app.use(Form)
    app.use(Card)
    app.use(Grid)
    app.use(GridItem)
    app.use(NavBar)
    app.use(Tabbar)
    app.use(TabbarItem)
    app.use(Cell)
    app.use(CellGroup)
  } else {
    // 动态导入PC端UI库
    const { ElButton, ElInput, ElForm, ElFormItem, ElCard, ElRow, ElCol, ElMenu, ElMenuItem, ElSubMenu, ElContainer, ElHeader, ElMain, ElFooter, ElAside } = await import('element-plus')
    await import('element-plus/dist/index.css')
    
    // 注册PC端组件
    app.use(ElButton)
    app.use(ElInput)
    app.use(ElForm)
    app.use(ElFormItem)
    app.use(ElCard)
    app.use(ElRow)
    app.use(ElCol)
    app.use(ElMenu)
    app.use(ElMenuItem)
    app.use(ElSubMenu)
    app.use(ElContainer)
    app.use(ElHeader)
    app.use(ElMain)
    app.use(ElFooter)
    app.use(ElAside)
  }
}
