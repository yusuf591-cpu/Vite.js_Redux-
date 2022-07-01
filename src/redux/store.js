import { configureStore } from '@reduxjs/toolkit';
import addTodoStore from './gettodo_reducer'

export default configureStore({
  reducer: {
    todos: addTodoStore
  },
})
