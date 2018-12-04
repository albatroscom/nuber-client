import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import App from './Components/App';
import './global-styles';
import GlobalStyle from './global-styles';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <GlobalStyle />
  </ApolloProvider>,  
  document.getElementById('root') as HTMLElement);
