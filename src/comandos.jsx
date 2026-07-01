import { useState } from 'react'
import {
  ArrowLeft,
  BadgeCheck,
  Bot,
  Info,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import comandoImage from '../docs_orddav/img_orddav/comando_orddav.png'

const defenseItems = [
  {
    title: 'Evitar comandos del sistema',
    description: 'Usar funciones seguras provistas por el lenguaje o framework en lugar de ejecutar comandos directamente en el sistema operativo.',
  },
  {
    title: 'Listas blancas de entradas',
    description: 'Definir explícitamente qué valores son aceptados, bloqueando cualquier entrada no contemplada.',
  },
  {
    title: 'Sanitización estricta',
    description: 'Limpiar y validar exhaustivamente los datos antes de pasarlos a funciones que interactúan con el sistema.',
  },
  {
    title: 'Privilegios mínimos',
    description: 'Limitar los permisos de los procesos para reducir el impacto de una posible explotación.',
  },
  {
    title: 'Segmentación de red',
    description: 'Dividir la infraestructura en zonas aisladas para contener un ataque y evitar su propagación.',
  },
  {
    title: 'Monitoreo de anomalías',
    description: 'Implementar sistemas que detecten patrones sospechosos en tiempo real, como intentos de ejecución no autorizada.',
  },
]

function TooltipItem({ title, description }) {
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
        <Info size={14} />
        {title}
      </button>

      {visible ? (
        <div className="absolute left-0 top-full z-10 mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-600 shadow-xl">
          <p className="font-semibold text-slate-800">{title}</p>
          <p className="mt-1 leading-6">{description}</p>
        </div>
      ) : null}
    </div>
  )
}

function Comandos({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Comandos</p>
            <h1 className="text-xl font-semibold sm:text-2xl">Inyección de comandos en SuperMax</h1>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>
        </header>

        <main className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-rose-500/15 p-3 text-rose-400">
                <ShieldAlert size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Riesgo principal</p>
                <h2 className="text-2xl font-semibold sm:text-3xl">Ejecución remota de código y compromiso del servidor</h2>
              </div>
            </div>

            <p className="text-base leading-7 text-slate-300">
              Se produce cuando una aplicación ejecuta comandos del sistema operativo usando entradas del usuario sin validación adecuada. En SuperMax, este tipo de falla puede llevar a acceso completo del servidor, robo de bases de datos o interrupción de servicios críticos.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
              <img src={comandoImage} alt="Diagrama de inyección de comandos" className="h-auto w-full rounded-xl object-cover" />
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/20">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/15 p-3 text-violet-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Puntaje CVSS</h3>
                  <p className="text-sm text-slate-400">La severidad es extremadamente alta cuando la explotación conduce a ejecución remota de código.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-800">
                <table className="min-w-full divide-y divide-slate-800 text-sm">
                  <thead className="bg-slate-800/70 text-left text-slate-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Métrica</th>
                      <th className="px-4 py-3 font-semibold">Valor</th>
                      <th className="px-4 py-3 font-semibold">Observación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-900/70 text-slate-300">
                    <tr>
                      <td className="px-4 py-3">Vector de acceso</td>
                      <td className="px-4 py-3">AV:N</td>
                      <td className="px-4 py-3">Acceso remoto por red</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Complejidad</td>
                      <td className="px-4 py-3">AC:L</td>
                      <td className="px-4 py-3">Fácil de explotar</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Privilegios</td>
                      <td className="px-4 py-3">PR:N</td>
                      <td className="px-4 py-3">No requiere autenticación</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Interacción de usuario</td>
                      <td className="px-4 py-3">UI:N</td>
                      <td className="px-4 py-3">No depende de interacción</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Alcance</td>
                      <td className="px-4 py-3">S:U</td>
                      <td className="px-4 py-3">Impacto sobre el sistema afectado</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Confidencialidad</td>
                      <td className="px-4 py-3">C:H</td>
                      <td className="px-4 py-3">Pérdida total de confidencialidad</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Integridad</td>
                      <td className="px-4 py-3">I:H</td>
                      <td className="px-4 py-3">Pérdida total de integridad</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Disponibilidad</td>
                      <td className="px-4 py-3">A:H</td>
                      <td className="px-4 py-3">Pérdida total de disponibilidad</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                <div className="flex items-center gap-2 font-semibold">
                  <BadgeCheck size={16} />
                  Puntaje final: 9.8
                </div>
                <p className="mt-2 text-emerald-200/90">Se considera crítica por su potencial de ejecución remota de código y afectación completa del entorno.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/20">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Controles de defensa</h3>
                  <p className="text-sm text-slate-400">Pasa el cursor sobre cada elemento para ver su explicación.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {defenseItems.map((item) => (
                  <TooltipItem key={item.title} title={item.title} description={item.description} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Comandos
