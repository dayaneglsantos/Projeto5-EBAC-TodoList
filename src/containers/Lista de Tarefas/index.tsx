import Tarefa from '../../components/Tarefas'
import { Container } from './styles'
import * as Enums from '../../utils/enums/tarefa'

const listaTarefas = [
  {
    titulo: 'Título 1',
    descricao: 'Descrição 1',
    prioridade: Enums.Prioridade.IMPORTANTE,
    status: Enums.Status.PENDENTE
  },
  {
    titulo: 'Título 2',
    descricao: 'Descrição 2',
    prioridade: Enums.Prioridade.URGENTE,
    status: Enums.Status.CONCLUIDA
  },
  {
    titulo: 'Título 3',
    descricao: 'Descrição 3',
    prioridade: Enums.Prioridade.NORMAL,
    status: Enums.Status.PENDENTE
  },
  {
    titulo: 'Título 3',
    descricao: 'Descrição 3',
    prioridade: Enums.Prioridade.IMPORTANTE,
    status: Enums.Status.CONCLUIDA
  }
]

const ListaTarefas = () => (
  <Container>
    <p>X tarefas marcadas como: --categoria-- e --termo--</p>
    <ul>
      {listaTarefas.map((t) => (
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

export default ListaTarefas
