import {
  ArrowLeft,
  DatabaseBackup,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

function Recuperacion({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-lg shadow-black/20 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Recuperación</p>
            <h1 className="text-xl font-semibold sm:text-2xl">Plan de recuperación ante desastres</h1>
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

        <main className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-400">
                <RefreshCw size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Objetivo</p>
                <h2 className="text-2xl font-semibold">Garantizar continuidad del negocio</h2>
              </div>
            </div>

            <p className="text-base leading-8 text-slate-300 text-justify">
              La mejora tecnológica y el plan de recuperación ante desastres son fundamentales para asegurar la continuidad de SuperMax frente a ataques de inyección y otros incidentes de seguridad. Una arquitectura resiliente no solo reduce el impacto de los eventos, sino que también garantiza que los servicios esenciales puedan seguir operando incluso en situaciones adversas.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <ShieldCheck size={16} />
                Enfoque estratégico
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400 text-justify">
                El plan debe combinar modernización tecnológica, control de riesgos y preparación operativa para minimizar tiempos de indisponibilidad y proteger la información crítica del negocio.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/20">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/15 p-3 text-violet-400">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Mejora tecnológica</p>
                  <h3 className="text-xl font-semibold">Modernización y seguridad continua</h3>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-300 text-justify">
                <p>
                  La migración progresiva hacia frameworks modernos con protección integrada contra XSS y SQLi fortalece la base de desarrollo y reduce la exposición a vulnerabilidades comunes.
                </p>
                <p>
                  La implementación de sistemas de gestión de identidades y accesos (IAM) mejora el control de privilegios, mientras que el cifrado de bases de datos en reposo y en tránsito protege la confidencialidad de la información.
                </p>
                <p>
                  Asimismo, la integración de herramientas de DevSecOps permite automatizar pruebas de seguridad en el ciclo de desarrollo, y las soluciones de seguridad en la nube aportan escalabilidad, monitoreo avanzado y mayor resiliencia.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/20">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-amber-500/15 p-3 text-amber-400">
                  <DatabaseBackup size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Plan de recuperación</p>
                  <h3 className="text-xl font-semibold">DR, respaldo y continuidad operativa</h3>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-300 text-justify">
                <p>
                  Es necesario definir RTO y RPO claros para cada sistema crítico, junto con copias de seguridad cifradas y redundantes en ubicaciones geográficas distintas.
                </p>
                <p>
                  También debe existir un procedimiento de restauración documentado, probado periódicamente mediante simulacros, así como infraestructura de alta disponibilidad para minimizar el impacto de caídas de servicio.
                </p>
                <p>
                  Finalmente, un equipo de respuesta a incidentes con protocolos de comunicación interna y externa, sumado a auditorías y pruebas de resiliencia, permite validar que la estrategia de recuperación siga siendo efectiva.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Recuperacion
