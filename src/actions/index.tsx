import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../constants';
import { VisibilityFilters } from '../types'

// action类型声明
export interface IAddTodoAction {
  id: number
  text: string
  type: string
}

export interface IToggleTodoAction {
  id: number
  type: string
}

export interface ISetVisibilityFilterAction {
  filter: VisibilityFilters
  type: string
}

export type TodoAction = IAddTodoAction & IToggleTodoAction

// action creater
let nextTodoId = 0;

export const addTodo = (text: string): IAddTodoAction => ({
  id: nextTodoId++,
  text,
  type: ADD_TODO
})

export const toggleTodo = (id: number): IToggleTodoAction => ({
  id,
  type: TOGGLE_TODO
})

export const setVisibilityFilter = (filter: VisibilityFilters): ISetVisibilityFilterAction => ({
  filter,
  type: SET_VISIBILITY_FILTER
})
