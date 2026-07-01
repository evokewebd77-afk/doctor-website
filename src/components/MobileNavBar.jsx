import { Link, useLocation } from 'react-router-dom'
import { Home, LayoutGrid, FlaskConical, HandHeart, Menu } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', icon: Home, path: '/' },
  { label: 'Services', icon: LayoutGrid, path: '/services' },
  { label: 'Lab', icon: FlaskConical, path: '/lab-services' },
  { label: 'Home Care', icon: HandHeart, path: '/home-care' },
  { label: 'More', icon: Menu, path: '/services#book-appointment' },
]

export default function MobileNavBar() {
  const location = useLocation()

  const isActive = (path) => {
    const basePath = path.split('#')[0]
    if (basePath === '/') return location.pathname === '/'
    return location.pathname === basePath
  }

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_16px_rgba(0,0,0,0.08)] pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around px-1 pt-2">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.path)
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 min-w-[56px] py-1 px-1 rounded-lg transition-colors ${
                active ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <item.icon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-400'}`} strokeWidth={active ? 2 : 1.5} />
              <span className={`text-[9px] font-semibold ${active ? 'text-blue-600' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
