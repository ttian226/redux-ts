import { ADD_TODO, TOGGLE_TODO } from '../constants';
import { TodoAction } from '../actions'
import { Todo } from '../types'

export default (state: Todo[] = [], action: TodoAction): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          text: action.text
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo: Todo): Todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state
  }
}