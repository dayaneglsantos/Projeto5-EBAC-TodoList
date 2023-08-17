import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import TarefaClass from '../../models/tarefa'
import { remover, editar } from '../../store/reducers/tarefas'
import { BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  titulo,
  prioridade,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  // Caso tenha uma descrição original, será atribuido no setDescrição. Caso contrário não apareceriam as descrições originais das tarefas, somente as que estariamos editando na hora.
  useEffect(() => {
    if (descricaoOriginal.length >= 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  const salvarTarefa = () => {
    dispatch(editar({ descricao, titulo, prioridade, status, id }))

    setEstaEditando(false)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        value={descricao}
        disabled={!estaEditando}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarTarefa}>Salvar</BotaoSalvar>
            <S.BotaoRemoverCancelar onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
