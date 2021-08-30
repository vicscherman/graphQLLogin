import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

import CurrentUser from '../queries/CurrentUser';
import Logout from '../mutations/Logout';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries:[{query:CurrentUser}]
    })
  }
  
  renderButtons() {
    const { loading, currentuser } = this.props.data;

    if (loading) {
      return <Spinner />;
    }
    if (currentuser) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Log Out</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo left'>
            Home
          </Link>
          <ul className='right'>{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(Logout)(graphql(CurrentUser)(Header));
