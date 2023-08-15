import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefas'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <p>X tarefas marcadas como: --categoria-- e --termo--</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              prioridade={t.prioridade}
              titulo={t.titulo}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaTarefas
