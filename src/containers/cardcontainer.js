import { connect } from 'react-redux';

import Card from '../components/card';
import { cardSelector } from '../selectors/selector';

const mapStateToProps = state => cardSelector;

const CardContainer = connect(
  mapStateToProps,
)(Card);

export default CardContainer;
