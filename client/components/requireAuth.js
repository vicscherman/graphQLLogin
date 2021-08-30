import React, {Component} from 'react';
import CurrentUser from '../queries/CurrentUser';
import {graphql} from 'react-apollo'
//old school react higher order component

export default(WrappedComponent) =>{

class RequireAuth extends Component{
  //again class based....useffect on update
  componentWillUpdate(nextProps){

   if(!nextProps.data.loading && !nextProps.data.currentuser){
     this.props.history.push('/login')
   }
  }

  render(){
    return <WrappedComponent {...this.props} />
  }


}

 return graphql(CurrentUser)(RequireAuth)
}