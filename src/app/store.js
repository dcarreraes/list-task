import { configureStore } from '@reduxjs/toolkit'
import listTask from './listTask'

export default configureStore({
    reducer: {
        tasks: listTask
    }
})