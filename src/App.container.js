import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  };
};


const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
