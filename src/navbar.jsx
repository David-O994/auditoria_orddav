import {
  AlertTriangle,
  FileText,
  Home,
  LayoutGrid,
  LockKeyhole,
  Package,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'

const navItems = [
  { id: 'resumen', label: 'Resumen', icon: Home },
  { id: 'sqli', label: 'SQLi', icon: ShieldAlert },
  { id: 'xss', label: 'XSS', icon: AlertTriangle },
  { id: 'comandos', label: 'Comandos', icon: ShieldCheck },
  { id: 'activos', label: 'Activos', icon: Package },
  { id: 'matriz', label: 'Matriz', icon: LayoutGrid },
  { id: 'controles', label: 'Controles', icon: LockKeyhole },
  { id: 'recuperacion', label: 'Recuperación', icon: RefreshCw },
  { id: 'prompts', label: 'Prompts', icon: FileText },
]

function Navbar({ currentView, onNavigate }) {
  return (
    <div className="sticky top-4 z-40 mb-6 rounded-2xl border border-slate-800 bg-slate-900/90 px-3 py-3 shadow-lg shadow-black/20 backdrop-blur">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentView === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon size={16} />
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
