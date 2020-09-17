import { ISetVisibilityFilterAction } from '../actions'
import { VisibilityFilters } from '../types'
import { SET_VISIBILITY_FILTER } from '../constants'

export default (state: VisibilityFilters = VisibilityFilters.SHOW_ALL, action: ISetVisibilityFilterAction): VisibilityFilters => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}