Object.assign = null;
Object.assign = require('object-assign');

const express = require('express'),
      app =  express(),
      React = require('react'),
      ReactRouter = require('react-router'),
      ReactDOMServer = require('react-dom/server'),
      path = require('path')


require('babel-register')({
  presets: ['react']
})

app.listen(process.env.PORT, () => {
  console.log('listening to port ' + process.env.PORT)
})

app.use('/', express.static(path.join(__dirname, '/')));

app.get(['/', '/profile'], (req, res) => {
  const { match } = require('react-router');
  const routes = require('./src/routes.js');
  var RouterContext = React.createFactory(ReactRouter.RouterContext);
  var store = require('./src/reducers');
  var Provider = React.createFactory(require('react-redux').Provider);

  var initialState = {
    data: 'hello'
  }

  store = store.configureStore(initialState);

  match({routes: routes, location: req.url}, (err, redirectLocation, renderProps) => {
    if (err) {
      console.log(err)
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.send(
      ReactDOMServer.renderToString(
        Provider({store: store}, RouterContext(renderProps))
      )
    );
    }

  })
})
