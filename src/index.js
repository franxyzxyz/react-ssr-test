const React = require('react'),
      connect = require('react-redux').connect,
      Link = require('react-router').Link,
      Index = require('./components/index.js')

var IndexState = function(state) {
	var stateJSON = JSON.stringify(state).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
  return {
		initialState: "window.__INITIAL_STATE__ = "+stateJSON
	}
}
// Index = connect(
// 	IndexState
// )(Index)

module.exports = connect(
	IndexState
)(Index)
