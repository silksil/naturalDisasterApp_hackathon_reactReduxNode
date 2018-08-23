import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class SignUp extends Component {
  onSubmit = (formProps) => {
    this.props.signUp(formProps, () => {
      this.props.history.push('/feature');
    });
  }
	render() {
    const { handleSubmit } = this.props;
		return (
      <div className="container">
        <h1> Sign-Up</h1>
  			<form onSubmit={handleSubmit(this.onSubmit)}>
  				<fieldset>
  					<label>Email</label>
  					<Field
  						name="email"
  						type="text"
  						component="input"
              autoComplete="none"
  					/>
  				</fieldset>
  				<fieldset>
  					<label>Password</label>
  					<Field
  						name="password"
  						type="password"
  						component="input"
              autoComplete="none"
  					/>
  				</fieldset>
          <div> {this.props.errorMessage}</div>
          <button className="btn-green">Sign Up!</button>
  			</form>
      </div>
		);
	}
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose (
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signUp' })
)(SignUp);
// compose allows you to include as many higher order components with an easier to read syntax
