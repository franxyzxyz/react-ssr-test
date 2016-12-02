Object.assign = null;
Object.assign = require('object-assign');

const express = require('express');
const React = require('react');
const ReactRouter = require('react-router');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const { match } = require('react-router');
const redux = require('react-redux');
const routes = require('./src/routes.js');

const app = express();


require('babel-register')({
  presets: ['react'],
});


if (process.env.NODE_ENV === 'development') {
  app.use('/', express.static(path.join(__dirname, '/build')));

  // webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:3000/');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    serverSideRender: true
  }));
  app.use(webpackHotMiddleware(compiler));
}
else if (process.env.NODE_ENV === 'production') {
  // app.use('/', express.static(path.join(__dirname, '/')));
  app.get(['/', '/profile'], (req, res) => {
    const RouterContext = React.createFactory(ReactRouter.RouterContext);
    const Provider = React.createFactory(redux.Provider);
    let store = require('./src/reducers');

    const initialState = {
      count: 0,
    };

    store = store.configureStore(initialState);

    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        console.log(err);
      } else if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        return res.send(ReactDOMServer.renderToString(
          Provider({ store }, RouterContext(renderProps))
        ));
      }

      return null;
    });
  });
}


app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
