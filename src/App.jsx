import { useState } from 'react'
import Resumen from './resumen'
import Sqli from './sqli'
import Xss from './xss'
import Comandos from './comandos'

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

  return <Resumen onOpenSqli={() => setView('sqli')} onOpenXss={() => setView('xss')} onOpenComandos={() => setView('comandos')} />
}

export default App