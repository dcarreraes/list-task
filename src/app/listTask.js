import { createSlice } from '@reduxjs/toolkit'

export const listTask = createSlice({
  name: 'counter',
  initialState: {
    value: [{ id: 1, name: 'tarea 1' }, { id: 2, name: 'tarea 2' }]
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    update: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { add, update, deletes } = listTask.actions

export default listTask.reducer