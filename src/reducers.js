const createStore = require('redux').createStore;

const reducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case 'add randomness':
      return Object.assign({}, state, { data: action.comment });
    default:
      return state;
  }
};

module.exports = {
  configureStore: function(initialState) {
    return createStore(reducer, initialState);
  }
};
