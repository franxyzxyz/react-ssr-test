const React = require('react'),
      connect = require('react-redux').connect,
      Link = require('react-router').Link,
      { addCount } = require('./actions')

class Random extends React.Component {
  constructor(props) {
    super(props)

  }

  onClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count, onClickState } = this.props
    return (
      <h2 onClick={onClickState}> Randome is again Me {count}</h2>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickState: () => {
      dispatch(addCount())
    }
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Random)
