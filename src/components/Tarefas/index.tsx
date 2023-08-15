import { useState } from 'react'
import * as S from './styles'

type Props = {
  descricao: string
  status: string
  titulo: string
  prioridade: string
}

const Tarefa = ({ descricao, titulo, prioridade, status }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemoverCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverCancelar>Remover</S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
