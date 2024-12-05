import { EstilosGlobais } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { temas } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={temas}>
      <EstilosGlobais/>
    </ThemeProvider>
  )
}

export default App
