const React = require('react'),
      Link = require('react-router').Link;
console.log(process.env.NODE_ENV)
class Index extends React.Component {
  render() {
    const isProd = process.env.NODE_ENV === 'production'
    const content =
      <div id="content">
        <h1>INDEX is Me</h1>
        <Link to='profile'>PROFILE</Link>
        <Link to='/'>RANDOM</Link>
        {this.props.children}
      </div>

    return isProd ? (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Test</title>
        </head>
        <body>
          {content}
          <script dangerouslySetInnerHTML={{__html: this.props.initialState}} />
          <script src="./bundle.js"></script>
        </body>
      </html>
    ) : content
  }
}

module.exports = Index
