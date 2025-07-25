import type { App } from 'vue'
import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Image as VanImage,
  Row,
  Col,
  Popup,
  Toast,
  Dialog,
  Notify,
  Loading,
  PullRefresh,
  List,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Tab,
  Tabs,
  NavBar,
  Tabbar,
  TabbarItem,
  Field,
  Form,
  Search,
  Picker,
  DatePicker,
  Area,
  Uploader,
  Rate,
  Slider,
  Stepper,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  ActionSheet,
  ShareSheet,
  Overlay,
  Badge,
  Tag,
  Card,
  Divider,
  Empty,
  ImagePreview,
  Skeleton,
  Steps,
  Step,
  Circle,
  Progress,
  CountDown,
  BackTop,
  Sticky,
  IndexBar,
  IndexAnchor,
  ContactCard,
  ContactEdit,
  ContactList,
  AddressEdit,
  AddressList,
  Calendar,
  Cascader,
  ConfigProvider,
  FloatingBubble,
  FloatingPanel,
  NumberKeyboard,
  PasswordInput,
  Signature,
  Space,
  TextEllipsis,
  Watermark
} from 'vant'
import 'vant/lib/index.css'

/**
 * 移动端UI组件配置
 * 仅包含Vant相关组件和样式
 */
export async function setupMobileUI(app: App) {
  try {
    // 注册Vant组件
    const components = [
      Button,
      Cell,
      CellGroup,
      Icon,
      VanImage,
      Row,
      Col,
      Popup,
      PullRefresh,
      List,
      Grid,
      GridItem,
      Swipe,
      SwipeItem,
      Tab,
      Tabs,
      NavBar,
      Tabbar,
      TabbarItem,
      Field,
      Form,
      Search,
      Picker,
      DatePicker,
      Area,
      Uploader,
      Rate,
      Slider,
      Stepper,
      Switch,
      Checkbox,
      CheckboxGroup,
      Radio,
      RadioGroup,
      ActionSheet,
      ShareSheet,
      Overlay,
      Badge,
      Tag,
      Card,
      Divider,
      Empty,
      Skeleton,
      Steps,
      Step,
      Circle,
      Progress,
      CountDown,
      BackTop,
      Sticky,
      IndexBar,
      IndexAnchor,
      ContactCard,
      ContactEdit,
      ContactList,
      AddressEdit,
      AddressList,
      Calendar,
      Cascader,
      ConfigProvider,
      FloatingBubble,
      FloatingPanel,
      NumberKeyboard,
      PasswordInput,
      Signature,
      Space,
      TextEllipsis,
      Watermark
    ]

    // 批量注册组件
    components.forEach(component => {
      app.use(component)
    })

    // 注册插件
    app.use(Lazyload)

    // 配置全局方法
    app.config.globalProperties.$toast = Toast
    app.config.globalProperties.$dialog = Dialog
    app.config.globalProperties.$notify = Notify
    app.config.globalProperties.$loading = Loading
    app.config.globalProperties.$imagePreview = ImagePreview

    // 设置全局标识
    ;(window as unknown as { vant: { Toast: typeof Toast; Dialog: typeof Dialog; Notify: typeof Notify; Loading: typeof Loading; ImagePreview: typeof ImagePreview } }).vant = {
      Toast,
      Dialog,
      Notify,
      Loading,
      ImagePreview
    }

    console.log('📱 Vant组件库已加载')
  } catch (error) {
    console.error('❌ 移动端UI组件加载失败:', error)
    throw error
  }
}

/**
 * 移动端特有的组件配置
 */
export const mobileUIConfig = {
  name: 'Vant',
  version: '4.x',
  components: [
    'Button',
    'Cell',
    'Icon',
    'Image',
    'Layout',
    'Popup',
    'Toast',
    'Dialog',
    'Notify',
    'Loading',
    'PullRefresh',
    'List',
    'Grid',
    'Swipe',
    'Lazyload',
    'Tab',
    'NavBar',
    'Tabbar',
    'Field',
    'Form',
    'Search',
    'Picker',
    'DatePicker',
    'Uploader',
    'Rate',
    'Slider',
    'Stepper',
    'Switch',
    'Checkbox',
    'Radio',
    'ActionSheet',
    'ShareSheet',
    'Badge',
    'Tag',
    'Card',
    'Divider',
    'Empty',
    'ImagePreview',
    'Skeleton',
    'Steps',
    'Circle',
    'Progress',
    'CountDown',
    'BackTop',
    'Sticky',
    'IndexBar',
    'ContactCard',
    'AddressEdit',
    'Calendar',
    'Cascader',
    'FloatingBubble',
    'NumberKeyboard',
    'PasswordInput',
    'Signature',
    'Space',
    'TextEllipsis',

    'Watermark'
  ]
}