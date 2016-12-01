const React = require('react'),
      { Route, IndexRoute, IndexRedirect } = require('react-router')
const Index = require('./index')
const Random = require('./random')
const Profile = require('./profile')

const routes = (
    <Route path="/" component={Index}>
      <IndexRoute component={Random} />
      <Route path="profile" component={Profile} />
    </Route>
)

module.exports = routes
