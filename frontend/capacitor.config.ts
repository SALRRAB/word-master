import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'top.zerage.wordmaster',
  appName: 'Word Master',
  webDir: 'dist',
  server: {
    // 允许 Capacitor WebView 加载本地文件
    androidScheme: 'https',
    // 开发时允许访问远程 API（生产构建不需要 cleartext）
    cleartext: true,
  },
}

export default config
