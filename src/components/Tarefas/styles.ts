import styled from 'styled-components'
import { Cores } from '../../styles/cores'
import * as Enums from '../../utils/enums/tarefa'

type TagProps = {
  prioridade?: Enums.Prioridade
  status?: Enums.Status
  parametro: 'prioridade' | 'status'
}

const trocaBgColor = (props: TagProps) => {
  if (props.parametro === 'prioridade') {
    if (Enums.Prioridade.IMPORTANTE) return Cores.laranja
    if (Enums.Prioridade.URGENTE) return Cores.vermelho
  } else {
    if (Enums.Status.PENDENTE) return Cores.amarelo
    if (Enums.Status.CONCLUIDA) return Cores.verde
  }
  return '#aaa'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px #00000040;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  background-color: ${(props) => trocaBgColor(props)};
  border-radius: 8px;
  display: inline-block;
  margin-right: 16px;
  color: #fff;
`

export const Descricao = styled.textarea`
  resize: none;
  font-size: 14px;
  color: #8b8b8b;
  font-family: 'Roboto Mono', monospace;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  border: none;
  background-color: trasparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  background-color: #2f3640;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`
export const BotaoRemoverCancelar = styled(Botao)`
  background-color: ${Cores.vermelho};
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${Cores.verde};
`
