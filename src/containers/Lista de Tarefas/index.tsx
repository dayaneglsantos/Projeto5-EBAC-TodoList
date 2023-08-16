import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefas'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (it) => it.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>X tarefas marcadas como: --categoria-- e {termo}</p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
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
