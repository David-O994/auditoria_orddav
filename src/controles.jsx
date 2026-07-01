import { useState } from 'react'
import {
  ArrowLeft,
  BadgeCheck,
  ChevronRight,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
} from 'lucide-react'

const policyItems = [
  {
    title: 'Consultas preparadas y ORM seguros',
    description: 'Uso de sentencias parametrizadas y frameworks de acceso a datos que evitan la ejecución de código malicioso en bases de datos.',
  },
  {
    title: 'Validación y sanitización de entradas',
    description: 'Aplicación de reglas de validación para neutralizar datos maliciosos en aplicaciones web y móviles.',
  },
  {
    title: 'Principio de mínimos privilegios',
    description: 'Asignación de permisos estrictamente necesarios a cuentas y servicios para reducir el impacto de una intrusión.',
  },
  {
    title: 'Política de cookies y cabeceras de seguridad',
    description: 'Configuración de cookies con atributos HttpOnly y Secure, además de cabeceras como Content Security Policy.',
  },
  {
    title: 'Prohibición de ejecución directa de comandos',
    description: 'Sustitución de llamadas al sistema operativo por APIs seguras cuando exista una alternativa equivalente.',
  },
  {
    title: 'Segmentación de red',
    description: 'División de la infraestructura en zonas aisladas para contener ataques y proteger servicios críticos.',
  },
]

const mitigationItems = [
  {
    title: 'WAF',
    description: 'Sistemas que filtran y bloquean tráfico malicioso dirigido a aplicaciones web.',
  },
  {
    title: 'Monitoreo continuo',
    description: 'Supervisión constante de la infraestructura para identificar comportamientos sospechosos en tiempo real.',
  },
  {
    title: 'Contenedores y entornos aislados',
    description: 'Ejecución de servicios en espacios controlados que limitan el alcance de un ataque.',
  },
  {
    title: 'Revisiones de código y pentesting',
    description: 'Evaluaciones periódicas que permiten detectar y corregir vulnerabilidades antes de que sean explotadas.',
  },
  {
    title: 'Plan de respuesta a incidentes',
    description: 'Procedimiento formal que define acciones, responsables y tiempos de reacción ante un evento de seguridad.',
  },
]

function HoverCard({ title, description }) {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <BadgeCheck size={14} />
        {title}
      </button>

      {visible ? (
        <div className="absolute left-0 top-full z-[100] mt-2 w-72 rounded-2xl border border-slate-700 bg-slate-800 p-3 text-sm text-slate-200 shadow-2xl shadow-black/40">
          <p className="font-semibold text-white">{title}</p>
          <p className="mt-1 leading-6 text-slate-300">{description}</p>
        </div>
      ) : null}
    </div>
  )
}

function Controles({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-lg shadow-black/20 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Controles</p>
            <h1 className="text-xl font-semibold sm:text-2xl">Políticas y controles de mitigación</h1>
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

        <main className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-2xl shadow-black/20 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Políticas de prevención</p>
                <h2 className="text-2xl font-semibold">Marco de seguridad de SuperMax</h2>
              </div>
            </div>

            <p className="text-base leading-7 text-slate-300">
              La empresa debe establecer lineamientos claros para reducir el riesgo de inyección SQL, XSS y ejecución de comandos, reforzando la protección de activos críticos y la continuidad operativa.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {policyItems.map((item) => (
                <HoverCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-black/20 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-amber-500/15 p-3 text-amber-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Controles de mitigación</p>
                  <h3 className="text-xl font-semibold">Medidas operativas y tecnológicas</h3>
                </div>
              </div>

              <div className="space-y-3">
                {mitigationItems.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                      <ChevronRight size={16} className="text-cyan-400" />
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-black/20 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-rose-500/15 p-3 text-rose-400">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Objetivo</p>
                  <h3 className="text-xl font-semibold">Reducir impacto y fortalecer la resiliencia</h3>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                Estas políticas y controles permiten disminuir la probabilidad de explotación, mejorar la detección temprana y asegurar una respuesta efectiva ante incidentes de seguridad.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Controles
