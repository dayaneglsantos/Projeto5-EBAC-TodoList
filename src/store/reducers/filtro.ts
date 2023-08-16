import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as Enums from '../../utils/enums/tarefa'

type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: Enums.Prioridade | Enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions
export default filtroSlice.reducer
