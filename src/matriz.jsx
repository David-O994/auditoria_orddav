import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  AlertTriangle,
  ChevronRight,
  ShieldAlert,
  Sparkles,
} from 'lucide-react'

const matrixRows = [
  {
    activo: 'Información de Clientes',
    riesgo: 'Robo de datos personales',
    probabilidad: 'Alta',
    impacto: 'Alto',
    nivel: 'Crítico',
    color: 'from-rose-500 to-red-600',
  },
  {
    activo: 'Información de Clientes',
    riesgo: 'Multas legales',
    probabilidad: 'Media',
    impacto: 'Alto',
    nivel: 'Alto',
    color: 'from-amber-500 to-orange-500',
  },
  {
    activo: 'Sistemas de Venta (POS)',
    riesgo: 'Manipulación de precios',
    probabilidad: 'Media',
    impacto: 'Medio',
    nivel: 'Medio',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    activo: 'Sistemas de Venta (POS)',
    riesgo: 'Interrupción de ventas',
    probabilidad: 'Alta',
    impacto: 'Alto',
    nivel: 'Crítico',
    color: 'from-rose-500 to-red-600',
  },
  {
    activo: 'Base de Datos Corporativa',
    riesgo: 'Fuga masiva de datos',
    probabilidad: 'Alta',
    impacto: 'Alto',
    nivel: 'Crítico',
    color: 'from-rose-500 to-red-600',
  },
  {
    activo: 'Base de Datos Corporativa',
    riesgo: 'Alteración de registros',
    probabilidad: 'Media',
    impacto: 'Alto',
    nivel: 'Alto',
    color: 'from-amber-500 to-orange-500',
  },
  {
    activo: 'Portal Web/App Móvil',
    riesgo: 'Robo de sesiones (XSS)',
    probabilidad: 'Alta',
    impacto: 'Alto',
    nivel: 'Crítico',
    color: 'from-rose-500 to-red-600',
  },
  {
    activo: 'Portal Web/App Móvil',
    riesgo: 'Redirección a sitios fraudulentos',
    probabilidad: 'Media',
    impacto: 'Alto',
    nivel: 'Alto',
    color: 'from-amber-500 to-orange-500',
  },
  {
    activo: 'Inventario y Logística',
    riesgo: 'Quiebres de stock',
    probabilidad: 'Media',
    impacto: 'Medio',
    nivel: 'Medio',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    activo: 'Infraestructura Tecnológica',
    riesgo: 'Ransomware',
    probabilidad: 'Alta',
    impacto: 'Alto',
    nivel: 'Crítico',
    color: 'from-rose-500 to-red-600',
  },
  {
    activo: 'Infraestructura Tecnológica',
    riesgo: 'Ejecución remota de comandos',
    probabilidad: 'Alta',
    impacto: 'Alto',
    nivel: 'Crítico',
    color: 'from-rose-500 to-red-600',
  },
]

const heatmapZones = [
  {
    title: 'Zona Crítica',
    description: 'Alta probabilidad + alto impacto',
    items: [
      'Robo de datos personales',
      'Interrupción de ventas',
      'Fuga masiva de datos',
      'Robo de sesiones XSS',
      'Ransomware',
      'Ejecución remota de comandos',
    ],
    tone: 'from-rose-500/20 to-red-500/10 border-rose-400/30 text-rose-200',
  },
  {
    title: 'Zona Alta',
    description: 'Media probabilidad + alto impacto',
    items: [
      'Multas legales',
      'Alteración de registros',
      'Redirección a sitios fraudulentos',
    ],
    tone: 'from-amber-500/20 to-orange-500/10 border-amber-400/30 text-amber-200',
  },
  {
    title: 'Zona Media',
    description: 'Media probabilidad + impacto medio',
    items: ['Manipulación de precios', 'Quiebres de stock'],
    tone: 'from-yellow-500/20 to-amber-500/10 border-yellow-400/30 text-yellow-200',
  },
]

function Matrix({ onBack }) {
  const [selectedRisk, setSelectedRisk] = useState(matrixRows[0])

  const heatmapLegend = useMemo(() => ({
    critical: 'text-rose-300',
    high: 'text-amber-300',
    medium: 'text-yellow-300',
    low: 'text-emerald-300',
  }), [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-lg shadow-black/20 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Matriz</p>
            <h1 className="text-xl font-semibold sm:text-2xl">Matriz de riesgo y mapa de calor</h1>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>
        </header>

        <main className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-black/20 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Matriz de Riesgo</p>
                <h2 className="text-2xl font-semibold">Resumen cuantitativo</h2>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <table className="min-w-full divide-y divide-slate-800 text-sm">
                <thead className="bg-slate-800/80 text-left text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Activo / Riesgo</th>
                    <th className="px-4 py-3 font-semibold">Probabilidad</th>
                    <th className="px-4 py-3 font-semibold">Impacto</th>
                    <th className="px-4 py-3 font-semibold">Nivel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/70 text-slate-300">
                  {matrixRows.map((row) => (
                    <tr
                      key={`${row.activo}-${row.riesgo}`}
                      className="cursor-pointer transition hover:bg-slate-800/80"
                      onMouseEnter={() => setSelectedRisk(row)}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-100">{row.activo}</div>
                        <div className="text-sm text-slate-400">{row.riesgo}</div>
                      </td>
                      <td className="px-4 py-3">{row.probabilidad}</td>
                      <td className="px-4 py-3">{row.impacto}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white ${row.color}`}>
                          {row.nivel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-black/20">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Mapa de calor</p>
                  <h3 className="text-xl font-semibold">Prioridad visual por severidad</h3>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">Baja</span>
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 text-yellow-300">Media</span>
                  <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-amber-300">Alta</span>
                  <span className="rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-rose-300">Crítica</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {['Baja', 'Media', 'Alta'].map((label, index) => (
                    <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                      <div className="mb-2 text-sm font-semibold text-slate-200">{label}</div>
                      <div className="space-y-2">
                        {index === 0 ? (
                          <div className="h-16 rounded-xl bg-gradient-to-br from-emerald-500/40 to-emerald-300/10" />
                        ) : index === 1 ? (
                          <div className="h-16 rounded-xl bg-gradient-to-br from-yellow-500/40 to-amber-500/10" />
                        ) : (
                          <div className="h-16 rounded-xl bg-gradient-to-br from-rose-500/40 to-red-500/20" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
                    <AlertTriangle size={16} className="text-cyan-400" />
                    Riesgo destacado
                  </div>
                  <p className="text-sm text-slate-300">{selectedRisk.riesgo}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <span className="rounded-full bg-slate-800 px-2 py-1">Probabilidad: {selectedRisk.probabilidad}</span>
                    <span className="rounded-full bg-slate-800 px-2 py-1">Impacto: {selectedRisk.impacto}</span>
                    <span className="rounded-full bg-slate-800 px-2 py-1">Nivel: {selectedRisk.nivel}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-black/20">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/15 p-3 text-violet-400">
                  <ChevronRight size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Zonas de evaluación</p>
                  <h3 className="text-xl font-semibold">Clasificación por severidad</h3>
                </div>
              </div>

              <div className="space-y-3">
                {heatmapZones.map((zone) => (
                  <div key={zone.title} className={`rounded-2xl border bg-gradient-to-r p-4 ${zone.tone}`}>
                    <div className="font-semibold">{zone.title}</div>
                    <div className="mt-1 text-sm opacity-90">{zone.description}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {zone.items.map((item) => (
                        <span key={item} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Matrix
