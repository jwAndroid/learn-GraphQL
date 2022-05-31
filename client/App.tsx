import { memo } from 'react';
import { View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import MyScreen from './src/MyScreen';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MyScreen />
    </ApolloProvider>
  );
};

export default memo(App);
