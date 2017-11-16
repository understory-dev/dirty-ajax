import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectors } from './redux/reducers'
import { thunks } from './redux'

class Info extends Component {
  render() {
    return (
      <div>
        email: { this.props.email }
        <p>
          This one uses a model to convert server responses.  The model only lets through values it expects to see.  The advantange is the model definition is very clear and stands alone.  It has limited ability to cast values to the expected type and could be expanded to handle nested values.
        </p>
        <div>
          <button
            disabled={this.props.loading}
            onClick={this.props.loadInfo}>load info</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: selectors.getEmail(state),
  loading: state.loading,
})

const mapDispatchToProps = {
  loadInfo: thunks.loadInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
