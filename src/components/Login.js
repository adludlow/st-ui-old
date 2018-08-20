import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

const required = value => value ? undefined : 'Required';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="field-outer">
        <div>
            <input {...input} placeholder={label} type={type}/>
        </div>
    </div>
);

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      if(this.props.isLoggedIn === true) {
        return <Redirect to='/' />;
      }
      else {
        return (
          <div>
            <form className="login-form" onSubmit={this.props.handleSubmit(this.props.doLogin)}>
              <Field name="username" type="text"
                     component={renderField} label="Username (eg: acusack@bigballs.com)"
                     validate={[required]}
              />
              <Field name="password" type="password"
                     component={renderField} label="Password"
                     validate={[required]}
              />
              <div className="button-container">
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>Sign In</button>
              </div>
            </form>
          </div>
        )
      }
    }
}

export default reduxForm({
    form: 'loginForm'
})(Login);