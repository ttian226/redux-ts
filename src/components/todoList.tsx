import * as React from 'react'
import { Todo as TodoItem } from '../types'
import { IToggleTodoAction } from '../actions'
import Todo from './todo'

interface IProps {
  todos: TodoItem[]
  toggleTodo: (id: number) => IToggleTodoAction
}

const TodoList: React.FC<IProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList