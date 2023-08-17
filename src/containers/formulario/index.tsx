import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Input, MainContainer, Titulo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import * as enums from '../../utils/enums/tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        descricao,
        prioridade,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Cadastrar nova tarefa</Titulo>
      <Form>
        <Input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título da tarefa"
        />
        <Input
          as="textarea"
          placeholder="Descrição"
          onChange={(e) => setDescricao(e.target.value)}
        ></Input>
        <Opcoes>
          <p>Prioridade:</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                type="radio"
                name="prioridade"
                value={prioridade}
                id={prioridade}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit" onClick={cadastrarTarefa}>
          Cadastrar
        </BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
