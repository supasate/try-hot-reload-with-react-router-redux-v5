import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.props.increment()
  }

  render() {
    return (
      <div>
        {this.props.count}
        <br />
        <button onClick={this.clickHandler}>+</button>
        hi
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({
    type: 'INCREMENT',
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
