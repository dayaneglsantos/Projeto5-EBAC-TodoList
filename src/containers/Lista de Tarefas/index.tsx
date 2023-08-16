import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefas'
import { Container, Resultado } from './styles'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (it) => it.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (it) => it.prioridade === valor
        )
      }
      if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter((it) => it.status === valor)
      }
      return tarefasFiltradas
    }
    return itens
  }

  const exibeResultado = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${valor}" ${complemento}`
    }
    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultado(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map((t) => (
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
