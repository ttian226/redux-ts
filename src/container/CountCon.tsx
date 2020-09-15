import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Counter from '../components/Counter'
import { StoreState } from '../types'
import { decrement, increment } from '../actions'

const mapStateToProps = (state: StoreState): { value: number } => ({
  value: state
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)