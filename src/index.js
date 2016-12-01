const React = require('react'),
      connect = require('react-redux').connect,
      Link = require('react-router').Link

class Index extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Test</title>
        </head>
        <body>
          <div id="content">
            <h1>INDEX is Me</h1>
            <Link to='profile'>PROFILE</Link>
            <Link to='/'>RANDOM</Link>
            {this.props.children}
          </div>

          <script dangerouslySetInnerHTML={{__html: this.props.initialState}} />
          <script src="build/bundle.js"></script>

        </body>
      </html>
    )
  }
}

var IndexState = function(state) {
	var stateJSON = JSON.stringify(state).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
  return {
		initialState: "window.__INITIAL_STATE__ = "+stateJSON
	}
}
Index = connect(
	IndexState
)(Index)

module.exports = Index


          //
          // <script src="https://cdnjs.cloudflare.com/ajawebx/libs/react/15.4.0/react.min.js"></script>
          // <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.0/react-dom.min.js"></script>
          // <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js"></script>
          // <script src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.6/react-redux.min.js"></script>
          // <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router/3.0.0/ReactRouter.min.js"></script>
          //
          // <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.19.0/babel.min.js"></script>
          //
          // <script src="src/require-shims.js"></script>
          // <script type="text/babel" src="src/reducers.js"></script>
          // <script type="text/babel" src="src/index.js"></script>
          // <script type="text/babel" src="src/random.js"></script>
          // <script type="text/babel" src="src/profile.js"></script>
          // <script type="text/babel" src="src/routes.js"></script>
          // <script type="text/babel" src="src/client.js"></script>
