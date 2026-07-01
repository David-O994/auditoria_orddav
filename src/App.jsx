import { useState } from 'react'
import Resumen from './resumen'
import Sqli from './sqli'
import Xss from './xss'
import Comandos from './comandos'
import Activos from './activos'
import Matriz from './matriz'
import Controles from './controles'
import Recuperacion from './recuperacion'
import Prompts from './prompts'

function App() {
  const [view, setView] = useState('resumen')

  if (view === 'sqli') {
    return <Sqli onBack={() => setView('resumen')} />
  }

  if (view === 'xss') {
    return <Xss onBack={() => setView('resumen')} />
  }

  if (view === 'comandos') {
    return <Comandos onBack={() => setView('resumen')} />
  }

  if (view === 'activos') {
    return <Activos onBack={() => setView('resumen')} />
  }

  if (view === 'matriz') {
    return <Matriz onBack={() => setView('resumen')} />
  }

  if (view === 'controles') {
    return <Controles onBack={() => setView('resumen')} />
  }

  if (view === 'recuperacion') {
    return <Recuperacion onBack={() => setView('resumen')} />
  }

  if (view === 'prompts') {
    return <Prompts onBack={() => setView('resumen')} onNavigate={(nextView) => setView(nextView)} />
  }

  return <Resumen onOpenSqli={() => setView('sqli')} onOpenXss={() => setView('xss')} onOpenComandos={() => setView('comandos')} onOpenActivos={() => setView('activos')} onOpenMatriz={() => setView('matriz')} onOpenControles={() => setView('controles')} onOpenRecuperacion={() => setView('recuperacion')} onOpenPrompts={() => setView('prompts')} />
}

export default App