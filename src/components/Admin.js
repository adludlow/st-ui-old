import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="admin-container">
        <div className="button-container">
          <button type="button" onClick={this.props.syncPlayers}>Sync Players</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.adminReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...actions.adminActions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);