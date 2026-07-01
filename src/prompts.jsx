import { useState } from 'react'
import { ArrowLeft, FileText, Sparkles, MessageSquareQuote } from 'lucide-react'
import Navbar from './navbar'

const promptCards = [
  {
    title: 'Resumen',
    section: 'Resumen',
    prompt: 'Crea un componente "resumen.jsx" que servirá de pantalla de inicio del proyecto, utiliza un estilo profesional, incorpora un botón para alternar entre modo claro y modo oscuro, utiliza Tailwind CSS y Lucide para los iconos.',
  },
  {
    title: 'SQLi',
    section: 'SQLi',
    prompt: 'Crea un componente "sqli.jsx" donde se muestre la imagen y se presente la información, con una tabla en la sección de "Puntaje CVSS" e implementando popups que muestren la información de los brackets ({}) al hacer hover con el mouse, añade un link como una sección en el inicio.',
  },
  {
    title: 'XSS',
    section: 'XSS',
    prompt: 'Crea un componente "xss.jsx" donde se muestre la imagen y se presente la información, con una tabla en la sección de "Puntaje CVSS" e implementando popups que muestren la información de los brackets ({}) al hacer hover con el mouse, añade un link como una sección en el inicio.',
  },
  {
    title: 'Comandos',
    section: 'Comandos',
    prompt: 'Crea un componente "comandos.jsx" donde se muestre la imagen y se presente la información, con una tabla en la sección de "Puntaje CVSS" e implementando popups que muestren la información de los brackets ({}) al hacer hover con el mouse, añade un link como una sección en el inicio.',
  },
  {
    title: 'Activos',
    section: 'Activos',
    prompt: 'Crea un componente "activos.jsx" donde se muestren como cuadros colapsables cada uno de los items, implementando un diseño inteligente y adaptable a diversos dispositivos. Agrega la descripción de los riesgos como un popup al hacer hover en la lista de riesgos de cada item.',
  },
  {
    title: 'Matriz',
    section: 'Matriz',
    prompt: 'Crea un componente "matriz.jsx" donde se aprecien: una tabla con los datos de Matriz de Riesgo y un mapa de calor (verde a rojo) que siga las indicaciones de Mapa de Calor, implementa un diseño profesional.',
  },
  {
    title: 'Controles',
    section: 'Controles',
    prompt: 'Crea un componente "controles.jsx" que presente las políticas y controles de mitigación de la empresa y que muestre la información en brackets ({}) al hacer hover, implementa un diseño acorde.',
  },
  {
    title: 'Recuperación',
    section: 'Recuperación',
    prompt: 'Crea un componente "recuperacion.jsx" que presente la información presentada en el documento, en forma de párrafos bien justificados y con diseño y tamaño de letra adecuados.',
  },
]

function PromptCard({ title, section, prompt }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="group rounded-3xl border border-slate-800 bg-white p-4 text-slate-800 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex items-center gap-2 text-cyan-700">
        <MessageSquareQuote size={18} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">{section}</p>

      <div className={`mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 ${expanded ? 'max-h-96 p-4' : 'max-h-20 p-0'}`}>
        <p className={`text-sm leading-7 text-slate-700 ${expanded ? 'opacity-100' : 'opacity-70'}`}>
          {prompt}
        </p>
      </div>
    </div>
  )
}

function Prompts({ onBack, onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <Navbar currentView="prompts" onNavigate={onNavigate} />

        <header className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-lg shadow-black/20 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Prompts</p>
            <h1 className="text-xl font-semibold sm:text-2xl">Historial de solicitudes y resultados</h1>
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

        <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-violet-500/15 p-3 text-violet-400">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Documento</p>
              <h2 className="text-2xl font-semibold">Prompts del proyecto y sus secciones</h2>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300">
            <div className="flex items-center gap-2 text-cyan-300">
              <Sparkles size={16} />
              <span className="font-semibold">Resumen general</span>
            </div>
            <p className="mt-2 text-justify text-slate-400">
              Este documento reúne los prompts utilizados para construir cada vista de la auditoría. Cada tarjeta presenta la solicitud original y se expande al pasar el cursor para mostrar el contenido completo con un diseño claro y profesional.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {promptCards.map((item) => (
              <PromptCard key={item.title} title={item.title} section={item.section} prompt={item.prompt} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Prompts
