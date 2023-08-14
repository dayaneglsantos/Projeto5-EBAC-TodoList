import ListaTarefas from './containers/Lista de Tarefas'
import Aside from './containers/aside'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Aside />
        <ListaTarefas />
      </Container>
    </>
  )
}

export default App
