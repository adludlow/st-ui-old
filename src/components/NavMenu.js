import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import actions from '../actions';

const mapStateToProps = (state) => {
  return {
    menuStatus: state.mainMenuReducer.menuStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...actions.mainMenuActions}, dispatch);
};

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render () {
    return (
      <div className="navbar navbar-default navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">SuperTrader</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trade</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Draft</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
