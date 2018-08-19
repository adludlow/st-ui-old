import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import actions from '../actions/';

const mapStateToProps = (state) => {
    return {
    ...state.loginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...actions.loginActions}, dispatch);
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;