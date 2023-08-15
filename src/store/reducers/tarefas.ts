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
      prioridade: Enums.Prioridade.IMPORTANTE,
      descricao: 'Descrição 2',
      status: Enums.Status.CONCLUIDA,
      id: 2
    },
    {
      titulo: 'Titulo 3',
      prioridade: Enums.Prioridade.IMPORTANTE,
      descricao: 'Descrição 3',
      status: Enums.Status.CONCLUIDA,
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
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
