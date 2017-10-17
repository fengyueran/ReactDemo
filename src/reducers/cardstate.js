const CARD_DATA = 'CARD_DATA';

const cardState = (state = { number: 0 }, action) => {
  switch (action.type) {
    case CARD_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
export { cardState };// eslint-disable-line
