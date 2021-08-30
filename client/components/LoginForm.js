import React, { Component } from 'react';
import LoginMutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser';

import AuthForm from './AuthForm';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }
//remember this old thing? Basically class based useEffect
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
        <h3>Login</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(CurrentUser)(graphql(LoginMutation)(LoginForm));
