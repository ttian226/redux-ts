// 这里定义store state
export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export type Todo = {
  completed: boolean
  id: number
  text: string
}

export interface IStoreState {
  todos: Todo[]
  visibilityFilter: VisibilityFilters
}