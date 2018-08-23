import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import actions from '../actions';
import './MainMenu.scss';

const mapStateToProps = (state) => {
  return {
    menuStatus: state.mainMenuReducer.menuStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...actions.mainMenuActions}, dispatch);
};

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render () {
    const sidePanelTitle = (<div style={{textAlign: 'center', minWidth: '20px'}}>
      <span className="title">Main Menu</span>
    </div>);
    return (
      <div className="drawer flex-column open">
        <div className="tools-and-layers">
          <div className="side-panel" >
            <div className="side-controls flex-column" >
              <div className="layer-picker-container flex-column">
                <h1>Item 1</h1>
                <h1>Item 2</h1>
                <h1>Item 3</h1>
                <h1>Item 4</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="side-handle" onClick={() => {
          let label = (!this.props.menuStatus) ? 'Opened' : 'Closed';
          this.props.toggleMainMenu(!this.props.menuStatus);
        }}>
          <span className={`fa fa-arrow-${(this.props.menuStatus === true) ? 'left' : 'right'}`}></span>
          {sidePanelTitle}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
