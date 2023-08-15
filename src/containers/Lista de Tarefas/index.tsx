import Tarefa from '../../components/Tarefas'
import { Container } from './styles'

const listaTarefas = [
  {
    titulo: 'Título 1',
    descricao: 'Descrição 1',
    prioridade: 'importante',
    status: 'concluída'
  },
  {
    titulo: 'Título 2',
    descricao: 'Descrição 2',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Título 3',
    descricao: 'Descrição 3',
    prioridade: 'normal',
    status: 'concluída'
  },
  {
    titulo: 'Título 3',
    descricao: 'Descrição 3',
    prioridade: 'urgente',
    status: 'pendente'
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
