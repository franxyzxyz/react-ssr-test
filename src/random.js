const React = require('react'),
      connect = require('react-redux').connect,
      Link = require('react-router').Link

class Random extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  onClick() {
    console.log(this.state)
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <h2 onClick={this.onClick.bind(this)}>Random is Me {this.state.count}</h2>
    )
  }
}

module.exports = Random
