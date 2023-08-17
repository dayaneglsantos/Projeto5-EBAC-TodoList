import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'
import * as Enums from '../../utils/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      titulo: 'Titulo 1',
      prioridade: Enums.Prioridade.IMPORTANTE,
      descricao: 'Descrição 1',
      status: Enums.Status.CONCLUIDA,
      id: 1
    },
    {
      titulo: 'Titulo 2',
      prioridade: Enums.Prioridade.NORMAL,
      descricao: 'Descrição 2',
      status: Enums.Status.PENDENTE,
      id: 2
    },
    {
      titulo: 'Titulo 3',
      prioridade: Enums.Prioridade.URGENTE,
      descricao: 'Descrição 3',
      status: Enums.Status.CONCLUIDA,
      id: 3
    },
    {
      titulo: 'Typescript',
      prioridade: Enums.Prioridade.NORMAL,
      descricao: 'Descrição 3',
      status: Enums.Status.CONCLUIDA,
      id: 3
    },
    {
      titulo: 'Javascript',
      prioridade: Enums.Prioridade.URGENTE,
      descricao: 'Descrição 3',
      status: Enums.Status.PENDENTE,
      id: 3
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      // Quando o findIndex não encontra um elemento, ele retorna -1
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (t) => t.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com mesmo título')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions

export default tarefasSlice.reducer
