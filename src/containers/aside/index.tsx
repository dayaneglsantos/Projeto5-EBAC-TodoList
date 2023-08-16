import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'

const Aside = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Input
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
    </S.Aside>
  )
}

export default Aside
