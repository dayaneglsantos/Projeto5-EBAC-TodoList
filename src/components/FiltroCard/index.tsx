import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraFiltro } from '../../store/reducers/filtro'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contadorTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((t) => t.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((t) => t.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(alteraFiltro({ criterio, valor }))
  }

  const ativo = verificaAtivo()
  const contador = contadorTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}
export default FiltroCard
