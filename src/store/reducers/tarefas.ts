import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'
import * as Enums from '../../utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Titulo 1',
      Enums.Prioridade.IMPORTANTE,
      'Descrição 1',
      Enums.Status.CONCLUIDA,
      1
    ),
    new Tarefa(
      'Titulo 2',
      Enums.Prioridade.URGENTE,
      'Descrição 2',
      Enums.Status.PENDENTE,
      2
    ),
    new Tarefa(
      'Titulo 3',
      Enums.Prioridade.IMPORTANTE,
      'Descrição 3',
      Enums.Status.CONCLUIDA,
      3
    ),
    new Tarefa(
      'Titulo 4',
      Enums.Prioridade.NORMAL,
      'Descrição 4',
      Enums.Status.PENDENTE,
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
