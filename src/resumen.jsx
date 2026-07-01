import { useState } from 'react'
import {
  BadgeCheck,
  Database,
  Eye,
  LockKeyhole,
  Moon,
  ShieldCheck,
  SunMedium,
  TrendingUp,
} from 'lucide-react'

function Resumen({ onOpenSqli, onOpenXss, onOpenComandos, onOpenActivos, onOpenMatriz, onOpenControles, onOpenRecuperacion, onOpenPrompts }) {
  const [theme, setTheme] = useState('dark')

  const isDark = theme === 'dark'

  return (
    <div className={isDark ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-900'}>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between rounded-2xl border border-slate-800/70 bg-white/5 px-4 py-3 shadow-lg shadow-slate-950/20 backdrop-blur sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Auditoría ORDDAV
            </p>
            <h1 className="text-xl font-semibold sm:text-2xl">SuperMax · Resumen ejecutivo</h1>
          </div>

          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              isDark
                ? 'border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isDark ? <SunMedium size={16} /> : <Moon size={16} />}
            {isDark ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </header>

        <main className="grid flex-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className={`rounded-3xl border p-6 shadow-xl sm:p-8 ${
            isDark
              ? 'border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800'
              : 'border-slate-200 bg-white'
          }`}>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Inicio del proyecto
                </p>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Protección de datos y confianza del cliente
                </h2>
              </div>
            </div>

            <p className={`max-w-2xl text-base leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              SuperMax gestiona información sensible de sus clientes, incluyendo datos de identificación,
              preferencias de compra y medios de pago electrónicos. Por ello, la organización debe fortalecer
              sus controles de privacidad, seguridad y gobernanza de la información.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className={`rounded-2xl p-4 ${isDark ? 'bg-slate-800/80' : 'bg-slate-100'}`}>
                <div className="mb-2 flex items-center gap-2 text-cyan-400">
                  <Database size={18} />
                  <span className="text-sm font-semibold">Datos</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Identificación, historial y preferencias del cliente.
                </p>
              </div>

              <div className={`rounded-2xl p-4 ${isDark ? 'bg-slate-800/80' : 'bg-slate-100'}`}>
                <div className="mb-2 flex items-center gap-2 text-emerald-400">
                  <LockKeyhole size={18} />
                  <span className="text-sm font-semibold">Seguridad</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Protección de información bancaria y controles de acceso.
                </p>
              </div>

              <div className={`rounded-2xl p-4 ${isDark ? 'bg-slate-800/80' : 'bg-slate-100'}`}>
                <div className="mb-2 flex items-center gap-2 text-amber-400">
                  <TrendingUp size={18} />
                  <span className="text-sm font-semibold">Gobierno</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Cumplimiento normativo y mejora continua de procesos.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              <div className={`rounded-2xl border p-4 ${isDark ? 'border-cyan-500/20 bg-cyan-500/10' : 'border-cyan-400/20 bg-cyan-50'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Sección destacada</p>
                <h3 className="mt-1 text-lg font-semibold">Inyección SQL</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Revisa el análisis completo con imagen, tabla CVSS y explicaciones emergentes.
                </p>
                <button type="button" onClick={onOpenSqli} className="mt-3 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400">
                  Ver detalle
                </button>
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-amber-500/20 bg-amber-500/10' : 'border-amber-400/20 bg-amber-50'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Sección destacada</p>
                <h3 className="mt-1 text-lg font-semibold">XSS</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Explora el riesgo de scripts maliciosos y su impacto en sesiones y cuentas.
                </p>
                <button type="button" onClick={onOpenXss} className="mt-3 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-400">
                  Ver detalle
                </button>
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-rose-500/20 bg-rose-500/10' : 'border-rose-400/20 bg-rose-50'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">Sección destacada</p>
                <h3 className="mt-1 text-lg font-semibold">Inyección de comandos</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Visualiza el análisis de ejecución remota y sus medidas de contención.
                </p>
                <button type="button" onClick={onOpenComandos} className="mt-3 rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400">
                  Ver detalle
                </button>
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-emerald-500/20 bg-emerald-500/10' : 'border-emerald-400/20 bg-emerald-50'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Sección destacada</p>
                <h3 className="mt-1 text-lg font-semibold">Activos de información</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Revisa los activos críticos y los riesgos asociados de forma organizada y colapsable.
                </p>
                <button type="button" onClick={onOpenActivos} className="mt-3 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400">
                  Ver detalle
                </button>
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-indigo-500/20 bg-indigo-500/10' : 'border-indigo-400/20 bg-indigo-50'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">Sección destacada</p>
                <h3 className="mt-1 text-lg font-semibold">Matriz de riesgo</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Consulta la evaluación de probabilidad, impacto y nivel de severidad en una vista profesional.
                </p>
                <button type="button" onClick={onOpenMatriz} className="mt-3 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400">
                  Ver detalle
                </button>
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-violet-500/20 bg-violet-500/10' : 'border-violet-400/20 bg-violet-50'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">Sección destacada</p>
                <h3 className="mt-1 text-lg font-semibold">Controles y políticas</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Revisa las políticas de prevención y los controles de mitigación de la empresa.
                </p>
                <button type="button" onClick={onOpenControles} className="mt-3 rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400">
                  Ver detalle
                </button>
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-emerald-500/20 bg-emerald-500/10' : 'border-emerald-400/20 bg-emerald-50'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Sección destacada</p>
                <h3 className="mt-1 text-lg font-semibold">Recuperación</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Revisa el plan de continuidad, respaldo y recuperación ante desastres.
                </p>
                <button type="button" onClick={onOpenRecuperacion} className="mt-3 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400">
                  Ver detalle
                </button>
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-fuchsia-500/20 bg-fuchsia-500/10' : 'border-fuchsia-400/20 bg-fuchsia-50'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">Sección destacada</p>
                <h3 className="mt-1 text-lg font-semibold">Prompts</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Explora el catálogo de prompts utilizados para construir esta auditoría y sus secciones.
                </p>
                <button type="button" onClick={onOpenPrompts} className="mt-3 rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400">
                  Ver detalle
                </button>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className={`rounded-3xl border p-6 shadow-lg ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/15 p-3 text-violet-400">
                  <Eye size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Objetivo del análisis</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Evaluar riesgos y fortalecer la postura de privacidad.
                  </p>
                </div>
              </div>

              <ul className={`space-y-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <li className="flex items-start gap-2">
                  <BadgeCheck size={16} className="mt-0.5 text-emerald-400" />
                  Identificar activos de información críticos.
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck size={16} className="mt-0.5 text-emerald-400" />
                  Revisar controles de seguridad y accesos.
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck size={16} className="mt-0.5 text-emerald-400" />
                  Preparar una estrategia de cumplimiento sólida.
                </li>
              </ul>
            </div>

            <div className={`rounded-3xl border p-6 shadow-lg ${isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Estado general
              </p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-4xl font-bold">92%</span>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  de madurez inicial en protección de datos
                </span>
              </div>
              <div className={`mt-4 h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400" />
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}

export default Resumen
