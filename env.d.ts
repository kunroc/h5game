/// <reference types="vite/client" />

// Vue组件类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// JSX类型声明
declare namespace JSX {
  interface Element extends VNode {}
  interface ElementClass extends ComponentRenderProxy {}
  interface ElementAttributesProperty {
    $props: {}
  }
  interface IntrinsicElements {
    [elem: string]: any
  }
}

// Web API类型声明
declare global {
  interface BluetoothLEScanFilter {
    name?: string
    namePrefix?: string
    services?: BluetoothServiceUUID[]
    manufacturerData?: BluetoothManufacturerDataFilter[]
    serviceData?: BluetoothServiceDataFilter[]
  }
  
  interface BluetoothRequestDeviceOptions {
    filters?: BluetoothLEScanFilter[]
    optionalServices?: BluetoothServiceUUID[]
    acceptAllDevices?: boolean
  }
  
  type BluetoothServiceUUID = number | string
  
  interface BluetoothDevice extends EventTarget {
    readonly id: string
    readonly name?: string
    readonly gatt?: BluetoothRemoteGATTServer
  }
  
  interface BluetoothRemoteGATTServer {
    readonly device: BluetoothDevice
    readonly connected: boolean
    connect(): Promise<BluetoothRemoteGATTServer>
    disconnect(): void
  }
  
  interface BluetoothManufacturerDataFilter {
    companyIdentifier: number
    dataPrefix?: BufferSource
    mask?: BufferSource
  }
  
  interface BluetoothServiceDataFilter {
    service: BluetoothServiceUUID
    dataPrefix?: BufferSource
    mask?: BufferSource
  }
  
  type OrientationLockType = 
    | 'any'
    | 'natural'
    | 'landscape'
    | 'portrait'
    | 'portrait-primary'
    | 'portrait-secondary'
    | 'landscape-primary'
    | 'landscape-secondary'
}

// 自定义模块类型声明
declare module '@/utils/device' {
  export function getDeviceType(): 'mobile' | 'tablet' | 'desktop'
  export function isMobileDevice(): boolean
  export function watchDeviceTypeChange(): () => void
  export function useDevice(): {
    isMobile: import('vue').Ref<boolean>
    isTablet: import('vue').Ref<boolean>
    isDesktop: import('vue').Ref<boolean>
  }
}

declare module '@/utils/rem' {
  export function setRootFontSize(): void
  export function initRemAdaptation(): void
  export function pxToRem(px: number, base?: number): string
  export function remToPx(rem: number, base?: number): number
  export function getCurrentRootFontSize(): number
  export function getBaseFontSize(): number
}