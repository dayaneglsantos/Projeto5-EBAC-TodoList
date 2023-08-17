import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'
import { Botao, Input } from '../../styles'

type Props = {
  mostraFiltroCard: boolean
}

const Aside = ({ mostraFiltroCard }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostraFiltroCard ? (
        <div>
          <Input
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(e) => dispatch(alteraTermo(e.target.value))}
          />
          <S.Filtros>
            <FiltroCard
              criterio="status"
              valor={enums.Status.PENDENTE}
              legenda="Pendentes"
            />
            <FiltroCard
              criterio="status"
              valor={enums.Status.CONCLUIDA}
              legenda="Concluídas"
            />
            <FiltroCard
              criterio="prioridade"
              valor={enums.Prioridade.URGENTE}
              legenda="Urgentes"
            />
            <FiltroCard
              valor={enums.Prioridade.IMPORTANTE}
              legenda="Importantes"
              criterio="prioridade"
            />
            <FiltroCard
              criterio="prioridade"
              valor={enums.Prioridade.NORMAL}
              legenda="Normal"
            />
            <FiltroCard criterio="todas" legenda="Total" />
          </S.Filtros>
        </div>
      ) : (
        <Botao onClick={(e) => navigate('/')}>
          Voltar para lista de tarefas
        </Botao>
      )}
    </S.Aside>
  )
}

export default Aside
