const  combineReducers = require('redux').combineReducers;
const createStore = require('redux').createStore;

function count(state = 0, action) {
  switch(action.type) {
    case 'ADD_COUNT':
      return state + 1;
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count
})

module.exports = {
  configureStore: function(initialState) {
    return createStore(rootReducer, initialState);
  }
};
