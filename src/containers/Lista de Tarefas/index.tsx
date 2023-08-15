import Tarefa from '../../components/FiltroCard/Tarefas'
import { Container } from './styles'

const ListaTarefas = () => (
  <Container>
    <p>X tarefas marcadas como: --categoria-- e --termo--</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaTarefas
