import * as React from 'react';

export interface IProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default class Counter extends React.Component<IProps> {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: { value } times
        <br />
        <br />
        <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
        <button onClick={ onDecrement }> - </button>
      </p>
    )
  }
}