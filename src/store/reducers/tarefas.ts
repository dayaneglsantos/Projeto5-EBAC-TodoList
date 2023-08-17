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
      id: 4
    },
    {
      titulo: 'Javascript',
      prioridade: Enums.Prioridade.URGENTE,
      descricao: 'Descrição 3',
      status: Enums.Status.PENDENTE,
      id: 5
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
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (t) => t.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com mesmo título')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const novaTarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? Enums.Status.CONCLUIDA
          : Enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
