import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/about', label: 'เกี่ยวกับเรา' },
  { to: '/services', label: 'บริการของเรา' },
  { to: '/portfolio', label: 'ผลงาน' },
  { to: '/contact', label: 'ติดต่อเรา' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors rounded-md ${
      isActive
        ? 'text-gold-500'
        : 'text-navy-700 hover:text-gold-500 dark:text-gray-200 dark:hover:text-gold-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/60 bg-white/90 backdrop-blur dark:border-navy-800 dark:bg-navy-950/90">
      <nav className="section flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 dark:bg-navy-800">
            <span className="font-serif text-xl font-bold text-gold-500">V</span>
          </div>
          <div className="leading-tight">
            <p className="font-serif text-base font-bold text-navy-900 dark:text-white">
              วิลเลจ แมนเนจเม้นท์
            </p>
            <p className="text-[11px] uppercase tracking-widest text-gold-600 dark:text-gold-400">
              Village Management Co., Ltd.
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-200 text-navy-700 transition hover:border-gold-500 hover:text-gold-500 dark:border-navy-700 dark:text-gray-200"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
          <NavLink to="/contact" className="btn-primary">
            ติดต่อเรา
          </NavLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-200 text-navy-700 dark:border-navy-700 dark:text-gray-200"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-200 text-navy-700 dark:border-navy-700 dark:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy-100 bg-white px-6 pb-4 dark:border-navy-800 dark:bg-navy-950 lg:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              ติดต่อเรา
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
