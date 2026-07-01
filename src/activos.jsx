import { useState } from 'react'
import {
  ArrowLeft,
  ChevronDown,
  Database,
  MonitorSmartphone,
  Package,
  ShieldAlert,
  ShoppingCart,
  ServerCog,
  Warehouse,
} from 'lucide-react'

const riskDescriptions = {
  'Robo de información personal.': 'El acceso no autorizado a datos sensibles como nombre, RUT, dirección o teléfono puede derivar en uso indebido por terceros.',
  'Fraude y suplantación de identidad.': 'Los atacantes podrían utilizar la información robada para abrir cuentas falsas o ejecutar compras en nombre del cliente.',
  'Pérdida de confianza de los clientes.': 'Una filtración afecta la reputación de la empresa y disminuye la lealtad del cliente.',
  'Multas por incumplimiento de normativas.': 'El mal manejo de información personal puede derivar en sanciones legales por incumplimiento de la normativa de privacidad.',
  'Manipulación de precios.': 'Alteraciones en las cajas registradoras o sistemas de venta pueden modificar precios y generar pérdidas económicas.',
  'Interrupción de ventas.': 'Fallos o ataques sobre terminales de pago pueden paralizar operaciones en tienda.',
  'Fraude financiero.': 'Vulnerabilidades en los sistemas de pago pueden explotarse para generar transacciones fraudulentas.',
  'Alteración de registros de transacciones.': 'La modificación de datos de ventas afecta la contabilidad y puede ocultar fraudes internos o externos.',
  'Alteración o eliminación de información.': 'Un atacante puede modificar o borrar registros críticos, afectando la integridad de los datos.',
  'Fuga masiva de datos.': 'La exfiltración de grandes volúmenes de información sensible impacta reputacional y legalmente.',
  'Pérdida de integridad de la información.': 'Datos corruptos o manipulados generan errores en procesos de negocio y decisiones estratégicas.',
  'Impacto operacional y financiero.': 'La indisponibilidad o corrupción de la base de datos afecta la continuidad del negocio y genera pérdidas.',
  'Robo de sesiones por XSS.': 'Los atacantes pueden secuestrar sesiones de usuarios y acceder a sus cuentas.',
  'Modificación de contenido web.': 'Alteraciones en la interfaz pueden difundir información falsa o engañosa.',
  'Redirección a sitios fraudulentos.': 'Los clientes pueden ser llevados a páginas falsas para robar credenciales o datos bancarios.',
  'Pérdida de ventas online.': 'La indisponibilidad o manipulación del portal afecta directamente los ingresos por comercio electrónico.',
  'Inventarios incorrectos.': 'Datos alterados generan discrepancias entre stock físico y digital.',
  'Quiebres de stock.': 'La falta de control puede provocar ausencia de productos en góndola.',
  'Errores en distribución.': 'Alteraciones en rutas o órdenes de compra generan retrasos y pérdidas en la cadena logística.',
  'Afectación de la cadena de suministro.': 'Un ataque puede interrumpir el flujo de productos desde proveedores hasta clientes finales.',
  'Ejecución remota de comandos.': 'Vulnerabilidades permiten que atacantes controlen servidores o equipos de red de forma remota.',
  'Instalación de malware.': 'Software malicioso puede comprometer la seguridad de los sistemas y robar información.',
  'Ransomware.': 'El cifrado de datos puede bloquear sistemas críticos exigiendo pago para recuperarlos.',
  'Caída de servicios críticos.': 'Ataques o fallas pueden dejar fuera de línea servidores, aplicaciones y servicios en la nube.',
}

const activosData = [
  {
    id: 'clientes',
    title: 'Información de Clientes',
    icon: <ShoppingCart size={20} />,
    accent: 'from-cyan-500 to-blue-500',
    summary: 'Datos personales, historial de compras y programas de fidelización.',
    details: [
      'Datos personales como nombre, RUT, dirección y teléfono.',
      'Historial de compras que permite personalizar ofertas y promociones.',
      'Cuentas de clientes y programas de fidelización con acumulación de puntos.',
    ],
    risks: [
      'Robo de información personal.',
      'Fraude y suplantación de identidad.',
      'Pérdida de confianza de los clientes.',
      'Multas por incumplimiento de normativas.',
    ],
  },
  {
    id: 'venta',
    title: 'Sistemas de Venta (POS)',
    icon: <MonitorSmartphone size={20} />,
    accent: 'from-violet-500 to-fuchsia-500',
    summary: 'Cajas registradoras, terminales de pago y registros de transacciones.',
    details: [
      'Cajas registradoras y terminales de pago en puntos de venta.',
      'Registro de transacciones para control contable y auditoría.',
      'Procesos críticos para ventas presenciales y pagos electrónicos.',
    ],
    risks: [
      'Manipulación de precios.',
      'Interrupción de ventas.',
      'Fraude financiero.',
      'Alteración de registros de transacciones.',
    ],
  },
  {
    id: 'bd',
    title: 'Base de Datos Corporativa',
    icon: <Database size={20} />,
    accent: 'from-emerald-500 to-teal-500',
    summary: 'Datos de clientes, productos, proveedores e historial de ventas.',
    details: [
      'Base de datos de clientes con información personal y transaccional.',
      'Base de datos de productos y proveedores para operaciones del negocio.',
      'Historial de ventas que soporta decisiones y reportes.',
    ],
    risks: [
      'Alteración o eliminación de información.',
      'Fuga masiva de datos.',
      'Pérdida de integridad de la información.',
      'Impacto operacional y financiero.',
    ],
  },
  {
    id: 'portal',
    title: 'Portal Web y Aplicación Móvil',
    icon: <Package size={20} />,
    accent: 'from-amber-500 to-orange-500',
    summary: 'E-commerce, carritos de compra, pasarelas de pago y cuentas de usuarios.',
    details: [
      'Plataforma de e-commerce para ventas online.',
      'Carros de compras y pasarelas de pago para transacciones digitales.',
      'Cuentas de usuarios y sesiones de acceso.',
    ],
    risks: [
      'Robo de sesiones por XSS.',
      'Modificación de contenido web.',
      'Redirección a sitios fraudulentos.',
      'Pérdida de ventas online.',
    ],
  },
  {
    id: 'logistica',
    title: 'Sistema de Inventario y Logística',
    icon: <Warehouse size={20} />,
    accent: 'from-sky-500 to-indigo-500',
    summary: 'Stock, órdenes de compra, bodegas y rutas de distribución.',
    details: [
      'Control de stock para mantener disponibilidad en góndola.',
      'Órdenes de compra y soporte de abastecimiento.',
      'Información de bodegas y rutas de distribución.',
    ],
    risks: [
      'Inventarios incorrectos.',
      'Quiebres de stock.',
      'Errores en distribución.',
      'Afectación de la cadena de suministro.',
    ],
  },
  {
    id: 'infra',
    title: 'Infraestructura Tecnológica',
    icon: <ServerCog size={20} />,
    accent: 'from-rose-500 to-red-500',
    summary: 'Servidores, equipos de red, sistemas operativos y servicios en la nube.',
    details: [
      'Servidores y equipos de red que soportan las operaciones.',
      'Sistemas operativos y servicios en la nube críticos para la disponibilidad.',
      'Entorno tecnológico que sustenta aplicaciones de negocio.',
    ],
    risks: [
      'Ejecución remota de comandos.',
      'Instalación de malware.',
      'Ransomware.',
      'Caída de servicios críticos.',
    ],
  },
]

function RiskItem({ risk }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <li
      className="relative flex gap-2"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      onFocus={() => setShowInfo(true)}
      onBlur={() => setShowInfo(false)}
    >
      <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
      <span className="cursor-help text-left text-sm text-slate-300">{risk}</span>

      {showInfo ? (
        <div className="absolute left-0 top-full z-[100] mt-2 max-w-xs rounded-2xl border border-slate-700 bg-slate-800 p-3 text-sm text-slate-200 shadow-2xl shadow-black/40">
          <p className="font-semibold text-white">{risk}</p>
          <p className="mt-1 leading-6 text-slate-300">{riskDescriptions[risk] || 'Este riesgo puede afectar la continuidad, integridad o confidencialidad de la organización.'}</p>
        </div>
      ) : null}
    </li>
  )
}

function ActivoCard({ activo, isOpen, onToggle }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/20 backdrop-blur">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-3xl p-4 text-left sm:p-5"
      >
        <div className="flex items-center gap-3">
          <div className={`rounded-2xl bg-gradient-to-br p-3 text-white ${activo.accent}`}>
            {activo.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">{activo.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{activo.summary}</p>
          </div>
        </div>
        <ChevronDown size={20} className={`shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen ? (
        <div className="grid gap-4 border-t border-slate-800 px-4 pb-4 pt-4 sm:grid-cols-2 sm:px-5">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Activos</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {activo.details.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Riesgos</h4>
            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              {activo.risks.map((item) => (
                <RiskItem key={item} risk={item} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function Activos({ onBack }) {
  const [openId, setOpenId] = useState('clientes')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-lg shadow-black/20 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Activos</p>
            <h1 className="text-xl font-semibold sm:text-2xl">Activos de información de SuperMax</h1>
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
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Mapa de riesgos</p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Explora cada activo y sus riesgos asociados</h2>
            </div>
            <div className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-slate-300">
              {activosData.length} categorías activas
            </div>
          </div>

          <div className="grid gap-4">
            {activosData.map((activo) => (
              <ActivoCard
                key={activo.id}
                activo={activo}
                isOpen={openId === activo.id}
                onToggle={() => setOpenId(openId === activo.id ? '' : activo.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Activos
