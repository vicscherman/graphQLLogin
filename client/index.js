import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import LoginForm from './components/LoginForm';

//No longer necessary
// const networkInterface = createNetworkInterface({
//   uri: '/graphql',
//   opts:{
//     credentials: 'same-origin'
//   }
// })

//returns id of anything from back end with an id property defined
const client = new ApolloClient({
  // networkInterface,
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
      <App />
       
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
