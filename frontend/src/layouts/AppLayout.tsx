import { Outlet, NavLink } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto">
      <main className="flex-1 pb-14">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-1 text-xs ${isActive ? 'text-primary-600' : 'text-gray-500'}`
          }
        >
          <span className="watch-nav-icon text-lg">🏠</span>
          <span className="watch-nav-text">首页</span>
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-1 text-xs ${isActive ? 'text-primary-600' : 'text-gray-500'}`
          }
        >
          <span className="watch-nav-icon text-lg">📝</span>
          <span className="watch-nav-text">任务</span>
        </NavLink>
        <NavLink
          to="/wordbooks"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-1 text-xs ${isActive ? 'text-primary-600' : 'text-gray-500'}`
          }
        >
          <span className="watch-nav-icon text-lg">📚</span>
          <span className="watch-nav-text">单词本</span>
        </NavLink>
        <NavLink
          to="/pet"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-1 text-xs ${isActive ? 'text-primary-600' : 'text-gray-500'}`
          }
        >
          <span className="watch-nav-icon text-lg">🐾</span>
          <span className="watch-nav-text">宠物</span>
        </NavLink>
        <NavLink
          to="/records"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-1 text-xs ${isActive ? 'text-primary-600' : 'text-gray-500'}`
          }
        >
          <span className="watch-nav-icon text-lg">📊</span>
          <span className="watch-nav-text">记录</span>
        </NavLink>
      </nav>
    </div>
  )
}
