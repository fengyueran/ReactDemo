/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { updateCardData } from '../actions/action';

 class Card extends Component {
   stateChange() {
      return this.props.number;
   }
  getRandomNum(Min,Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
  }
  handleClick() {
    global.store.dispatch(updateCardData({ number:this.getRandomNum(0,100) }))
  }
  render() {
      return (
        <button onClick={this.handleClick.bind(this)}>
            I like the number: {this.stateChange()}.
        </button>
      );
  }
}
Card.propTypes = {
  number: PropTypes.number,
};

export default Card;
