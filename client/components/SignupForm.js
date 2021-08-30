import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import SignupMutation from '../mutations/Signup';
import CurrentUser from '../queries/CurrentUser';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps){
    // this.props //current set of props
    // nextProps //the set of props that are in place on rerender
     if(!this.props.data.currentuser && nextProps.data.currentuser){
       this.props.history.push('/dashboard')
     }
 
   }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: CurrentUser }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Sign Up Form</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(CurrentUser)(graphql(SignupMutation)(SignupForm))
