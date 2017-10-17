
const CORDOVA_DATA = 'CORDOVA_DATA';

const cordovaState = (state = {}, action) => {
  switch (action.type) {
    case CORDOVA_DATA:
      {
        return { ...state, caseId: action.caseId };
      }
    default:
      return state;
  }
};

export { cordovaState };// eslint-disable-line
