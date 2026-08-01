import { StrictMode, Component, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// 错误边界：捕获渲染异常，避免 WebView 黑屏
class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, color: 'red', fontFamily: 'monospace', fontSize: 12 }}>
          <h2>App Error</h2>
          <pre>{this.state.error.message}</pre>
          <pre>{this.state.error.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

// 全局异常捕获（用于非渲染错误）
window.onerror = (msg, src, line, col, err) => {
  document.body.innerHTML = `<div style="padding:20px;color:red;font:12px monospace">
    <h2>Fatal Error</h2>
    <p>${msg}</p>
    <p>${src}:${line}:${col}</p>
    <pre>${err?.stack || ''}</pre>
  </div>`
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
