import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Todo, VisibilityFilters, IStoreState } from '../types'
import TodoList from '../components/todoList'
import { toggleTodo, IToggleTodoAction } from '../actions'

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters): Todo[] => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => t.completed === false)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed === true)
    default:
      return todos
  }
}

const mapStateToProps = (state: IStoreState): {todos: Todo[]} => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch): {toggleTodo: (id: number) => IToggleTodoAction} => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)