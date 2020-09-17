import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IStoreState, VisibilityFilters } from '../types'
import { setVisibilityFilter } from '../actions'
import Link from '../components/link'

interface IProps {
  filter: VisibilityFilters
  children: React.ReactNode
}

const mapStateToProps = (state: IStoreState, ownProps: IProps): { active: boolean } => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IProps): { onClick: () => void } => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)