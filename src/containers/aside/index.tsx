import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const Aside = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendetes" contador={1} />
        <FiltroCard legenda="Concluídas" contador={1} />
        <FiltroCard legenda="Urgentes" contador={1} />
        <FiltroCard legenda="Importantes" contador={1} />
        <FiltroCard legenda="Normal" contador={1} />
        <FiltroCard ativo legenda="Total" contador={1} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default Aside
