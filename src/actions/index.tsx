import { INCREMENT, DECREMENT } from '../constants';

// action类型声明
export interface IINCREMENTAction {
  type: INCREMENT
}

export interface IDECREMENTAction {
  type: DECREMENT
}

export type ModifyAction = IINCREMENTAction | IDECREMENTAction

// action creater
export const increment = (): IINCREMENTAction => ({
  type: INCREMENT
})

export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
})
