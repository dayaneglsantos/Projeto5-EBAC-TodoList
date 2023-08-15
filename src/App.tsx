import { Provider } from 'react-redux'
import ListaTarefas from './containers/Lista de Tarefas'
import Aside from './containers/aside'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Aside />
        <ListaTarefas />
      </Container>
    </Provider>
  )
}

export default App
