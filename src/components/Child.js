import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Child = ({ path }) => (
  <div>
    Child path is {path}
  </div>
)

Child.propTypes = {
  path: PropTypes.string
}

const mapStateToProps = (state) => ({
  path: state.router.location.pathname,
})

export default connect(mapStateToProps)(Child)
