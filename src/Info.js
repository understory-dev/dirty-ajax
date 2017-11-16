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
          Everything looks the same to us, except now our state has a lot of junk we don't understand.
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
